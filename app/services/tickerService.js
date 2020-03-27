import io from 'socket.io-client';
import React from 'react';
import PropTypes from 'prop-types';

export class Connect extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.connect('AAPL');
    }
    connect(stockSymbol) {
        let socket = null;
        socket = io('http://localhost:4000');

        socket.on('connect', () => {
            console.log('connected');
            socket.on(stockSymbol, (data) => {
                console.log(data);
                this.props.handleData(data);
            });

            socket.emit('ticker', stockSymbol);
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
        });
    }
    render() {
        return null;
    }
}
Connect.propTypes = {
    handleData: PropTypes.func
};
