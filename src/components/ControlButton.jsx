import React from 'react';
import {Button} from 'react-bootstrap';

import {ControlContext} from './../providers';

function ControlButton(props) {
    return (
        <ControlContext.Consumer>
            {changeStyle => (
                <Button onClick={() => changeStyle(props.btnStyle)} bsStyle={props.btnStyle}>
                    {props.btnText}
                </Button>
            )}
        </ControlContext.Consumer>
    );
}

export default ControlButton;
