import React from 'react';
import {StyleContext} from '../providers';
import {Button} from 'react-bootstrap';

function StyledButton() {
    return (
        <StyleContext.Consumer>
            {style => <Button block bsSize="large" bsStyle={style}>I will change style!</Button>}
        </StyleContext.Consumer>
    );
}

export default StyledButton;
