import React from 'react';
import {ButtonGroup} from 'react-bootstrap';
import ControlButton from './ControlButton';

function Buttons() {
    return (
        <ButtonGroup className="button-group">
            <ControlButton btnStyle="primary" btnText="Primary" />
            <ControlButton btnStyle="success" btnText="Success" />
            <ControlButton btnStyle="info" btnText="Info" />
            <ControlButton btnStyle="warning" btnText="Warning" />
            <ControlButton btnStyle="danger" btnText="Danger" />
        </ButtonGroup>
    );
}

export default Buttons;
