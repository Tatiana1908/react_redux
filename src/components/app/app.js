
import React, { Component } from 'react';
import Form from "../../container/form-container"
import List from '../../container/list-container'

class App extends Component{
    render(){
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header d-flex justify-content-center">
                                TO DO LIST
                            </div>
                            <div className="card-body">
                                <Form />
                                <List />
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }

}
export default App