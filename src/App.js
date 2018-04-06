import React, {Component} from 'react';
import Buttons from './components/Buttons';
import StyledButton from './components/StyledButton';

import {StyleContext, ControlContext} from './providers';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dynamicStyle: "primary"
        };

        this.changeStyle = this.changeStyle.bind(this);
    }

    changeStyle(value) {
        this.setState({dynamicStyle: value});
    }

    render() {
        return (
            <div className="App">
                <ControlContext.Provider value={this.changeStyle}>
                    <Buttons />
                </ControlContext.Provider>
                <StyleContext.Provider value={this.state.dynamicStyle}>
                    <StyledButton />
                </StyleContext.Provider>
            </div>
        );
    }
}

export default App;
