import React, { Component } from 'react';

class Form extends Component {
    addNewTask = (e) =>{
        e.preventDefault()
        this.props.addItem(this.newTask.value)
        this.newTask.value = ''

    }
    render() {
        return (

            <form action=""  className="d-flex" onSubmit={this.addNewTask}>
                <input type="text" className="new-task" ref={(node) => this.newTask = node}/>
                <button type="submit" className="btn btn-light">+</button>
            </form>
        );
    }
}

export default Form;