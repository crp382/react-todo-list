import React , { Component } from 'react' ;
import PropTypes from 'prop-types';


export class Todoitem extends Component{
    
    //Chaging style based on status of completed prop
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 'line-through' : ''
        }
    }

    render(){
        const { id, title } = this.props.todo;
        const btnStyle = {
            background: '#ff0000',
            color: '#fff',
            padding: '5px 9px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right'
        }    
        return(
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                {title}
                <button onClick={this.props.deleteTodoItem.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}


//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.array.isRequired
  }


export default Todoitem