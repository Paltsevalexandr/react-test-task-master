import '../styles/application.scss';
import {Connect} from '../services';
import {DataTable} from './UI/DataTable.js';
import {Links} from './UI/links.js';
import {Select} from './UI/select.js';
import React, {PureComponent} from 'react';

class App extends PureComponent {
    constructor() {
        super();
        this.state = {data: [], priceChanges: [true], amount: '10', rowsRange: []};
        this.displayedRowsRange = this.displayedRowsRange.bind(this);
        this.handleData = this.handleData.bind(this);
    }
    handleData(data) {
        this.setState({data: [JSON.parse(data), ...this.state.data]},
        ()=>this.priceChanges());
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
    selectAmount(e) {
        this.setState({amount: e.target.value});
    }
    displayedRowsRange(coeff, index) {
        this.setState({rowsRange: [coeff * index - coeff, coeff * index]}, ()=> {
            console.log(this.state.rowsRange);
        });
    }
    render() {
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
                <Connect
                    handleData = {this.handleData}
                />
                <Select
                    selectAmount = {e=>this.selectAmount(e)}
                    amount = {this.state.amount}
                />
                <DataTable
                    data = {this.state.data}
                    priceChanges = {this.state.priceChanges}
                    rowsRange = {this.state.rowsRange}
                />
                <Links
                    amount = {this.state.amount}
                    data = {this.state.data}
                    displayedRowsRange = {this.displayedRowsRange}
                />
            </div>
        );
    }
}

export default App;
