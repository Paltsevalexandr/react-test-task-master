import React from 'react';
import PropTypes from 'prop-types';
export function Select(props) {
    return (
      <div>
          <select onChange = {e=>props.selectAmount(e)} value = {props.amount}>
              <option value = "5">5</option>
              <option value = "10">10</option>
              <option value = "20">20</option>
              <option value = "30">30</option>
              <option value = "50">50</option>
              <option value = "100">100</option>
          </select>
      </div>
    );
}
Select.propTypes = {
    selectAmount: PropTypes.func,
    amount: PropTypes.string
};
