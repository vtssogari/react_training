import * as React from 'react';
import { Button } from "react-bootstrap"
//import { OtherComponent } from "./OtherComponent"

export class Registration extends React.Component<{}, {}>
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
                <div className="panel panel-default">
                    <div className="panel-heading">New Registration</div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label >Name</label>
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label >Semister</label>
                                <select className="form-control">
                                    <option>Spring 2010</option>
                                    <option>Fall 2017 </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label >Course</label>
                                <select className="form-control">
                                    <option>CS123</option>
                                    <option>C204S</option>
                                    <option>CS222</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label >Description</label>
                                <div>
                                    <p className="form-control-static">Deep learning course</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <label >Course Hour</label>
                                <div>
                                    <p className="form-control-static">1 - 3 PM</p>
                                </div>
                            </div>
                            <Button>Cancel</Button>
                            <Button>Add</Button>
                        </form>
                    </div>
                </div>

            </div>
        );

    }
}