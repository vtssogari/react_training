import * as React from 'react';
//import { Checkbox } from "react-bootstrap"
//import { OtherComponent } from "./OtherComponent"
import {InboxPagination} from "./InboxPagination"
import {InboxTable} from "./InboxTable"

export class Inbox extends React.Component<{}, {}>
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
        <h1>Student Registration</h1>
        <hr/>
        <InboxPagination />
        <InboxTable />
    </div>
    );

  }
}