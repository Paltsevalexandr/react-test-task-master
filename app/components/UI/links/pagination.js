import React from 'react';
import PropTypes from 'prop-types';
import {RenderLinks} from './renderLinks.js';
export class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 1};
        this.setPage = this.setPage.bind(this);
    }
    setPage(index) {
        this.setState({page: index});
    }
    render() {
        let links = this.props.links.map((item, index) => {
            if(this.props.links.length <= 7) {
                return(
                    <RenderLinks
                    key = {index}
                    index = {index}
                    amount = {this.props.amount}
                    foundPrevLinks = {this.props.foundPrevLinks}
                    foundNextLinks = {this.props.foundNextLinks}
                    displayedRowsRange = {this.props.displayedRowsRange}
                    />
                );
            }else if(this.props.links.length > 7) {
                if (index === 0 || index === this.props.links.length - 1) {
                    return(
                        <RenderLinks
                        key = {index}
                        index = {index}
                        amount = {this.props.amount}
                        setPage = {this.setPage}
                        displayedRowsRange = {this.props.displayedRowsRange}
                        />
                    );
                }else if(index >= this.state.page - 2 && index <= this.state.page + 1) {
                    return(
                        <RenderLinks
                        key = {index}
                        index = {index}
                        amount = {this.props.amount}
                        setPage = {this.setPage}
                        displayedRowsRange = {this.props.displayedRowsRange}
                        />
                    );
                }else if(index === this.state.page - 3 || index === this.state.page + 2) {
                    return(
                        <div className = "linkWrapper dots" key = {index}>...</div>
                    );
                }else if(index < this.state.page - 3 && index > this.state.page + 2) {
                    return null;
                }
            }
        });
        return(
            <div className = "pagesLinks">
                <div className = "linksWrap">
                    {links}
                </div>
                <p>{'Page: ' + (this.state.page + 1)}</p>
            </div>
        );
    }
}
Pagination.propTypes = {
    links: PropTypes.array,
    amount: PropTypes.string,
    displayedRowsRange: PropTypes.func,
    prevLink: PropTypes.object,
    nextLink: PropTypes.object,
    foundPrevLinks: PropTypes.func,
    foundNextLinks: PropTypes.func
};
