import * as React from 'react';
import { Button, Modal, } from "react-bootstrap"

interface ModalProps {
    show: boolean;
    onHide: ()=>void;
    onYes: ()=>void;
}

export class Confirmation extends React.Component<ModalProps, {}>
{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <Modal {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure? 
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onYes}>Yes</Button>
                    <Button onClick={this.props.onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );

    }
}