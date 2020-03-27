import React from 'react';
import PropTypes from 'prop-types';
import {TableHeader} from './tableHeader.js';
import {TableRows} from './tableRows.js';

export class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {arr: []};
    }
    render() {
        return(
            <div>
                <table className = "infoTable">
                    <TableHeader/>
                    <TableRows
                    data = {this.props.data}
                    priceChanges = {this.props.priceChanges}
                    />
                </table>
            </div>
        );
    }
}
DataTable.propTypes = {
    data: PropTypes.array,
    priceChanges: PropTypes.array
};
