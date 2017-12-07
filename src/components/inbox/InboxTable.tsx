import * as React from 'react';
import { Button, } from "react-bootstrap"
//import { OtherComponent } from "./OtherComponent"
import { RegistrationTable } from "./RegistrationTable"
import { RegistrationModal } from "./RegistrationModal"
import { Student } from "../domain/Student"

interface InboxTableProps {
    students: Array<Student>;
}

interface InboxTableState {
    registrationModalShow: boolean;
}

export class InboxTable extends React.Component<InboxTableProps, InboxTableState>
{
    constructor(props: any) {
        super(props)
        this.handleNewRegistration = this.handleNewRegistration.bind(this);
        this.hideRegistration = this.hideRegistration.bind(this);
        this.state = { registrationModalShow: false }
    }

    private handleNewRegistration(e: any): void {
        this.setState({ registrationModalShow: true });
    }

    private hideRegistration(): void {
        this.setState({ registrationModalShow: false });
    }

    render() {
        return (
            <div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Student Name
                                </th>
                                <th>
                                    Student ID
                                </th>
                                <th>
                                    Course Registration
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.students.map(
                                student => {
                                    return (
                                        <tr>
                                            <td> {student.name} </td>
                                            <td> {student.id} </td>
                                            <td>
                                                <RegistrationTable registrations={student.registrations} />
                                            </td>
                                            <td>
                                                <Button onClick={this.handleNewRegistration}>New</Button>
                                            </td>
                                        </tr>
                                    );
                                }
                            )
                        }
                            
                        </tbody>
                    </table>
                </div>
                <RegistrationModal show={this.state.registrationModalShow} onHide={this.hideRegistration} />
            </div>
        );

    }
}


