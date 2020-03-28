import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from './pagination.js';
export class GetLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {links: []};
    }
    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.getLinksNumber(this.props.amount);
        }
    }
    getLinksNumber(amount) {
        const n = this.props.data.length % amount;
        let num = (this.props.data.length - n) / amount;
        if(n > 0) {
            num += 1;
        }
        const arr = Array(num).fill(true);
        this.setLinks(arr);
    }
    setLinks(linksArr) {
        this.setState({links: linksArr});
    }
    render() {
        return(
            <Pagination
            links = {this.state.links}
            amount = {this.props.amount}
            displayedRowsRange = {this.props.displayedRowsRange}
            />
        );
    }
}
GetLinks.propTypes = {
    data: PropTypes.array,
    amount: PropTypes.string,
    displayedRowsRange: PropTypes.func,
};
