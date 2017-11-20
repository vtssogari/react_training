import * as React from 'react';
import { Button } from "react-bootstrap"
import { RegistrationModal } from "./RegistrationModal"
import { Confirmation } from "./Confirmation"

interface RegistrationTableState{
    registrationModalShow: boolean;
    confirmationModalShow: boolean;
}


export class RegistrationTable extends React.Component<{}, RegistrationTableState>
{
    constructor(props: any) {
        super(props)
        this.state = { registrationModalShow : false, confirmationModalShow: false}     
        this.handleViewRegistration = this.handleViewRegistration.bind(this);
        this.handleEditRegistration = this.handleEditRegistration.bind(this);
        this.hideRegistration = this.hideRegistration.bind(this);   
        this.handleDelete = this.handleDelete.bind(this);     
        this.hideConfirmation=this.hideConfirmation.bind(this);
        this.onYes = this.onYes.bind(this);
    }

    private handleDelete(e:any):void {
        this.setState({confirmationModalShow: true, registrationModalShow :false})
    }
    private handleViewRegistration(e: any): void {
        this.setState({confirmationModalShow: false, registrationModalShow : true});
    }
    private handleEditRegistration(e: any): void {
        this.setState({confirmationModalShow: false, registrationModalShow : true});
    }
    private hideRegistration():void {
        this.setState({confirmationModalShow: false, registrationModalShow : false});
    }
    private hideConfirmation():void {
        this.setState({confirmationModalShow: false, registrationModalShow : false});        
    }
    private onYes():void {
        //Please update the modal values to add new data
        alert('Yes!!!s');
        this.setState({confirmationModalShow: false, registrationModalShow : false});
    }
    render() {
        return (
            <div>

                {/* This is Course Registration sections */}
                <table className="table">
                    <thead>
                        <tr>
                            <th> Semister  </th>
                            <th> Course </th>
                            <th> Hour  </th>
                            <th> Description </th>
                            <th>  Action  </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>  Spring 2014 </td>
                            <td>  CS123 </td>
                            <td>  11 - 12 PM </td>
                            <td>  Deep learning course </td>
                            <td> 
                                <Button onClick={this.handleViewRegistration}>View</Button>
                                <Button onClick={this.handleEditRegistration}>Edit</Button>
                                <Button onClick={this.handleDelete}>Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>  Fall 2017 </td>
                            <td>  CS555 </td>
                            <td>  11 - 3 PM </td>
                            <td>  Machine Learing course </td>
                            <td> 
                                <Button onClick={this.handleViewRegistration}>View</Button>
                                <Button onClick={this.handleEditRegistration}>Edit</Button>
                                <Button onClick={this.handleDelete}>Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <RegistrationModal show={this.state.registrationModalShow} onHide={this.hideRegistration} />
                <Confirmation show={this.state.confirmationModalShow} onHide={this.hideConfirmation} onYes={this.onYes} />
            </div>
        );

    }
}

