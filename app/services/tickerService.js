import io from 'socket.io-client';
import React from 'react';
import {DataTable} from './InfoTable.js';

export class Connect extends React.Component {
    constructor() {
        super();
        this.state = {data: [], priceChanges: [true, true]};
    }
    componentDidMount() {
        this.connect('AAPL');
    }
    connect(stockSymbol) {
        let socket = null;
        socket = io('http://localhost:4000');

        socket.on('connect', () => {
            console.log('connected');
            socket.on(stockSymbol, (data) => {
                console.log(data);
                if(this.state.data.length < 1) {
                    this.getHeaders(data);
                    this.handleData(data);
                } else if(this.state.data.length >= 1) {
                    this.handleData(data);
                }
            });

            socket.emit('ticker', stockSymbol);
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
        });
    }
    handleData(data) {
        this.setState({data: [...this.state.data, JSON.parse(data)]},
        ()=> {
            this.priceChanges();
        });
    }
    getHeaders(data) {
        const dataObj = JSON.parse(data);
        const keys = Object.keys(dataObj);
        const headerObj = {};
        keys.map((elem)=>{
            headerObj[elem] = elem;
        });
        this.setState({data: [headerObj, ...this.state.data]});
    }
    priceChanges() {
        if(this.state.data.length > 2) {
            if(this.state.data[this.state.data.length - 1].price > this.state.data[this.state.data.length - 2].price) {
                this.setState({priceChanges: [...this.state.priceChanges, true]});
            }else if(this.state.data[this.state.data.length - 1].price < this.state.data[this.state.data.length - 2].price) {
                this.setState({priceChanges: [...this.state.priceChanges, false]});
            }
        }
    }
    render() {
        return(
            <DataTable
                data = {this.state.data}
                priceChanges = {this.state.priceChanges}
            />
      );
    }
}
