import React from 'react';
import PropTypes from 'prop-types';

export class TableRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectDataRows: [], selectPriceChanges: []};
    }
    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.getSelectDataRange(this.props.rowsRange, this.props.amount);
            this.getSelectPriceChanges(this.props.rowsRange, this.props.amount);
        }
    }
    getSelectDataRange(begin, amount) {
        const dataArr = [...this.props.data];
        const customArr = dataArr.splice(begin, amount);
        this.setState({selectDataRows: customArr});
    }
    getSelectPriceChanges(begin, amount) {
        const dataArr = [...this.props.priceChanges];
        const customArr = dataArr.splice(begin, amount);
        this.setState({selectPriceChanges: customArr});
    }
    render() {
        const tableRows = this.state.selectDataRows.map((item, index)=>{
            return(
            <tr key={index} style = {{backgroundColor: this.state.selectPriceChanges[index] ? 'rgb(98, 219, 98)' : 'pink'}}>
                <td>{item.ticker}</td>
                <td>{item.exchange}</td>
                <td>
                    <span>{this.state.selectPriceChanges[index] ?  '▲' : '▼'}</span>
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
          <tbody>
            {tableRows}
          </tbody>
        );
    }
}
TableRows.propTypes = {
    data: PropTypes.array,
    priceChanges: PropTypes.array,
    rowsRange: PropTypes.number,
    amount: PropTypes.string
};
