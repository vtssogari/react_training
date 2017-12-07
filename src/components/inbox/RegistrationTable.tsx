import * as React from 'react';
import { Button } from "react-bootstrap"
import { RegistrationModal } from "./RegistrationModal"
import { Confirmation } from "./Confirmation"
import { Registration } from "../domain/Registration"
interface RegistrationTableState {
    registrationModalShow: boolean;
    confirmationModalShow: boolean;
}

interface RegistrationProps {
    registrations: Array<Registration>;
}

export class RegistrationTable extends React.Component<RegistrationProps, RegistrationTableState>
{
    constructor(props: any) {
        super(props)
        this.state = { registrationModalShow: false, confirmationModalShow: false }
        this.handleViewRegistration = this.handleViewRegistration.bind(this);
        this.handleEditRegistration = this.handleEditRegistration.bind(this);
        this.hideRegistration = this.hideRegistration.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.hideConfirmation = this.hideConfirmation.bind(this);
        this.onYes = this.onYes.bind(this);
    }

    private handleDelete(e: any): void {
        this.setState({ confirmationModalShow: true, registrationModalShow: false })
    }
    private handleViewRegistration(e: any): void {
        this.setState({ confirmationModalShow: false, registrationModalShow: true });
    }
    private handleEditRegistration(e: any): void {
        this.setState({ confirmationModalShow: false, registrationModalShow: true });
    }
    private hideRegistration(): void {
        this.setState({ confirmationModalShow: false, registrationModalShow: false });
    }
    private hideConfirmation(): void {
        this.setState({ confirmationModalShow: false, registrationModalShow: false });
    }
    private onYes(): void {
        //Please update the modal values to add new data
        alert('Yes!!!s');
        this.setState({ confirmationModalShow: false, registrationModalShow: false });
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
                        {
                            this.props.registrations.map(
                                reg => {
                                    return (
                                        <tr>
                                            <td>  {reg.semister} </td>
                                           
                                            <td>   </td>
                                            <td>  11 - 12 PM </td>
                                            <td>  Deep learning course </td>
                                            <td>
                                                <Button onClick={this.handleViewRegistration}>View</Button>
                                                <Button onClick={this.handleEditRegistration}>Edit</Button>
                                                <Button onClick={this.handleDelete}>Delete</Button>
                                            </td>
                                        </tr>
                                    );
                                }
                            )
                        }

                    </tbody>
                </table>
                <RegistrationModal show={this.state.registrationModalShow} onHide={this.hideRegistration} />
                <Confirmation show={this.state.confirmationModalShow} onHide={this.hideConfirmation} onYes={this.onYes} />
            </div>
        );

    }
}

