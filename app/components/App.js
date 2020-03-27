import '../styles/application.scss';
import {Connect} from '../services';
import React, {PureComponent} from 'react';

class App extends PureComponent {
    render() {
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
                <Connect/>
            </div>
        );
    }
}

export default App;
