import * as React from 'react';
import { Button, Modal, } from "react-bootstrap"
//import { OtherComponent } from "./OtherComponent"
import { Registration } from "./Registration"

interface ModalProps {
    show: boolean;
    onHide: ()=>void;
}

export class RegistrationModal extends React.Component<ModalProps, {}>
{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <Modal {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Registration />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );

    }
}