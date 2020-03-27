import React from 'react';
import PropTypes from 'prop-types';
import {Links} from './links.js';
import {Select} from './UI/select.js';

export class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {amount: '10'};
    }
    getDozen(begin, end) {
        const n = [...this.props.data];
        const m = n.splice(begin, end);
        console.log(m);
    }
    selectAmount(e) {
        this.setState({amount: e.target.value});
    }
    render() {
        const info = this.props.data.map((item, index)=>{
            return(
            <tr key={index} style = {{backgroundColor: this.props.riseOrFall[index] ? 'rgb(98, 219, 98)' : 'pink'}}>
                <td>{item.ticker}</td> 
                <td>{item.exchange}</td>
                <td>
                    <span>{this.props.riseOrFall[index] ?  '▲' : '▼'}</span>
                    {item.price}
                </td>
                <td>{item.change}</td>
                <td>{item.change_percent}</td>
                <td>{item.last_trade_time}</td>
                <td>{item.dividend}</td>
                <td>{item.yield}</td>
            </tr>
            );
        });
        return(
            <div>
                <Select
                selectAmount = {e=>this.selectAmount(e)}
                amount = {this.state.amount}
                />
                <table className = "infoTable">
                    <tbody>
                        {info}
                    </tbody>
                </table>
                <Links
                    amount = {this.state.amount}
                    data = {this.props.data}
                />
            </div>
        );
    }
}
DataTable.propTypes = {
    data: PropTypes.array,
    riseOrFall: PropTypes.array
};
