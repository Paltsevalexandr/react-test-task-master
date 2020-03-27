import React from 'react';
import PropTypes from 'prop-types';

export class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dataListPart: '', links: []};
    }
    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.getLinksNumber();
        }
    }
    getLinksNumber() {
        const n = this.props.data.length % 10;
        let num = (this.props.data.length - n) / 10;
        if(n > 0) {
            num += 1;
        }
        const arr = Array(num).fill(true);
        this.setLinks(arr);
    }
    setLinks(linksArr) {
        this.setState({links: linksArr});
        this.getDozen(0, 10);
    }
    getDozen(begin, end) {
        const n = [...this.props.data];
        const m = n.splice(begin, end);
        console.log(m);
    }
    render() {
        const info = this.props.data.map((item, index)=>{
            return(
            <tr key={index} style = {{backgroundColor: this.props.riseOrFall[index] ? 'rgb(98, 219, 98)' : 'pink'}}>
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
        const links = this.state.links.map((item, index) => {
            return(
                <div className = "linkWrapper">
                    <a href = "#"
                    key = {index}
                    className = "link">
                        {index + 1}
                    </a>
                </div>
            );
        });
        return(
            <div>
                <table className = "infoTable">
                    <tbody>
                        {info}
                    </tbody>
                </table>
                <div className = "linksWrap">{links}</div>
            </div>
        );
    }
}
DataTable.propTypes = {
    data: PropTypes.array,
    riseOrFall: PropTypes.array
};
