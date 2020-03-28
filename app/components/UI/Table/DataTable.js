import React from 'react';
import PropTypes from 'prop-types';
import {TableHeader} from './tableHeader.js';
import {TableRows} from './tableRows.js';

export function DataTable(props) {
    return(
        <table className = "infoTable">
            <TableHeader/>
            <TableRows
            data = {props.data}
            priceChanges = {props.priceChanges}
            rowsRange = {props.rowsRange}
            amount = {props.amount}
            />
        </table>
    );
}
DataTable.propTypes = {
    data: PropTypes.array,
    priceChanges: PropTypes.array,
    rowsRange: PropTypes.number,
    amount: PropTypes.string
};
