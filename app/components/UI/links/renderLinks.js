import React from 'react';
import PropTypes from 'prop-types';
export function RenderLinks(props) {
    return(
        <div className = "linkWrapper">
              <a href = "#"
              onClick = {()=>{
                  props.displayedRowsRange(props.amount, props.index + 1);
                  props.setPage(props.index);
              }}
              className = "link">
              {props.index + 1}
              </a>
        </div>
    );
}
RenderLinks.propTypes = {
    amount: PropTypes.string,
    displayedRowsRange: PropTypes.func,
    setPage: PropTypes.func,
    index: PropTypes.number
};
