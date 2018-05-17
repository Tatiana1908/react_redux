import React, {Component} from "react";

class ListItem extends Component{
    constructor() {
        super()
        this.state = {
            edit: false
        }
    }
    removeItem = () =>{
        this.props.removeItem(this.props.item.id)

    };
    checkItem =() =>{
        this.props.checkItem(this.props.item.id)
    };

    toggleStateEdit = () =>{
        this.setState({edit: true})

    };
    onSave = () => {
        const value = this.input.value;

        this.props.editItem(value, this.props.item.id)

        this.setState({edit: false})
    };
    renderEdit () {
        const editBtn = <span onClick={this.onSave} >OK</span>;
        return(
            <li className={this.class}><input type="text" ref = { (node) => this.input = node } defaultValue={this.props.item.value}/>{editBtn} </li>
        )

    }
    renderItemText () {
        const removeBtn = <span className="icon" onClick={this.removeItem}><i className="fas fa-trash"></i></span>;
        const checkbox = <input type="checkbox" onChange={this.checkItem}/>;
        const editBtn = <i className="fas fa-pencil-alt" onClick={this.toggleStateEdit}></i>
        this.class = `list-group-item  d-flex justify-content-between align-items-center`;

        if(this.props.item.checked){
            this.class += ` checked`
        }

        return(
            <li className={this.class}>{checkbox} <span className="list-content">{this.props.item.value}</span>{editBtn} {removeBtn}</li>

        )
    }
    render() {
        return (this.state.edit) ? this.renderEdit() : this.renderItemText();
    }
}
export default ListItem