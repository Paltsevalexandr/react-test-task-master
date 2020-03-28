import React from 'react';
import PropTypes from 'prop-types';
export class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }
    func() {
        console.log('very cool');
    }
    render() {
        return(
            <div className = "pagination">
              <div onClick = {()=>{
                  this.foundPrevLinks();
              }}>
                Prev
              </div>
              <div>bla</div>
              <div>bla</div>
              <div>bla</div>
              <div>bla</div>
              <div>bla</div>
              <div>bla</div>
              <div>Next</div>
            </div>
        );
    }
}
Pagination.propTypes = {
    links: PropTypes.array
};
