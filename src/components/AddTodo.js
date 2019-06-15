import React, { Component } from 'react'

export class AddTodo extends Component {
    state = { 
        title: ''
    }

    //handle the text change in input field
    inputChange = (e) => this.setState({ [e.target.name]: e.target.value });

    //Adding new todo item on submit
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    render(){
        return(
            <form onSubmit={this.onSubmit} style={{ display: 'flex', padding: '7px 0px'}}>
                <input
                type="text"
                name="title"
                style={{flex: '10', padding: '5px'}}
                placeholder="Add Todo Item"
                value={this.state.title}
                onChange={this.inputChange}
                />
                <input
                type="submit"
                value="Submit"
                className="btn"/>
            </form>
        )
    }
}


export default AddTodo