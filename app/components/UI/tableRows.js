import React from 'react';
import PropTypes from 'prop-types';

export class TableRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectDataRows: [], selectPriceChanges: []};
    }
    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.getSelectDataRange(5, 6);
            this.getSelectPriceChanges(5, 6);
        }
    }
    getSelectDataRange(begin, end) {
        const arr = [...this.props.data];
        const customArr = arr.splice(begin, end);
        console.log(customArr);
        this.setState({selectDataRows: customArr});
    }
    getSelectPriceChanges(begin, end) {
        const arr = [...this.props.priceChanges];
        const customArr = arr.splice(begin, end);
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
    rowsRange: PropTypes.array
};
