import * as React from 'react';
//import { Checkbox } from "react-bootstrap"
//import { OtherComponent } from "./OtherComponent"
import {InboxPagination} from "./InboxPagination"
import {InboxTable} from "./InboxTable"
import {Student} from "../domain/Student"

export interface InboxProps{
  students:Array<Student>;
  headerName?: string;
}

export class Inbox extends React.Component<InboxProps, {}>
{
  constructor(props: any) {
    super(props)
  }

  /*
  private handleEvent(event: any):void {
    event.target.value;
  }
  */

  render() {
    return (
    <div>
        <h1> {this.props.headerName?  this.props.headerName + ' Registration'  : 'Student Registration'} </h1>
        <hr/>
        <InboxPagination />
        <InboxTable students={this.props.students} />
    </div>
    );

  }
}