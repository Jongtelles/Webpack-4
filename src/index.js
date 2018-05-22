import React from 'react';
import { render } from 'react-dom';
import Hello from './hello';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello hello={'Hello, world! And the people of the world! I AM USING WEBPACK!!'} />
            </div>
        );
    }
}
render(<App />, document.getElementById('app'));
