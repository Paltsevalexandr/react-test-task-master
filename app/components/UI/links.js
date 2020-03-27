import React from 'react';
import PropTypes from 'prop-types';
export class Links extends React.Component {
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
        const links = this.state.links.map((item, index) => {
            return(
              <div className = "linkWrapper" key = {index}>
                  <a href = "#"
                  onClick = {()=>this.props.displayedRowsRange(this.props.amount, index + 1)}
                  className = "link">
                  {index + 1}
                  </a>
              </div>
            );
        });
        return(
          <div className = "linksWrap">{links}</div>
        );
    }
}
Links.propTypes = {
    data: PropTypes.array,
    amount: PropTypes.string,
    displayedRowsRange: PropTypes.func
};
