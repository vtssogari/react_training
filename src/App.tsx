import * as React from 'react';
import {Inbox} from "./components/inbox/Inbox"

export class App extends React.Component<{}, {}>
{
  constructor(props: any) {
    super(props)
  }

  render() {
    return <Inbox />;
  }
}

export default App;
