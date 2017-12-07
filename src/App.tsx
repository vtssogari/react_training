import * as React from 'react';
import {Inbox} from "./components/inbox/Inbox"
import {sampleDatatJson} from "./data/sampleData"

import {Students} from "./components/domain/Students"

export class App extends React.Component<{}, {}>
{
  constructor(props: any) {
    super(props)
    
  }

  render() {
    var root:Students = JSON.parse(sampleDatatJson);
    return <Inbox students={root.students} headerName="Kun's Registration"/>;
  }
}

export default App;
