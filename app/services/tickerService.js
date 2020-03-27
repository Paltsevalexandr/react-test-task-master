import io from 'socket.io-client';
import React from 'react';
import {DataTable} from './UI/InfoTable.js';

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
                this.handleData(data);
            });

            socket.emit('ticker', stockSymbol);
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
        });
    }
    handleData(data) {
        this.setState({data: [JSON.parse(data), ...this.state.data]},
        ()=> {
            this.priceChanges();
        });
    }
    priceChanges() {
        if(this.state.data.length > 1) {
            if(this.state.data[0].price > this.state.data[1].price) {
                this.setState({priceChanges: [true, ...this.state.priceChanges]});
            }else if(this.state.data[0].price < this.state.data[1].price) {
                this.setState({priceChanges: [false, ...this.state.priceChanges]});
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
