import React, { Component } from 'react'
import Proptypes from 'prop-types';

class Todoitem extends Component {
    getStyle = () => {
        return{
            backgroundColor : "#f4f4f4",
            padding :'10px',
            borderBottom: '1px #ccc dotted',
            textDecoration : this.props.todos.completed ? "line-through" : "none"
        }
    }


    render() {
        const {id,title} = this.props.todos;
        return (
            <div style ={this.getStyle()}>
                <p>
                    <input type = "checkbox" onChange = {this.props.markComplete.bind(this,id)}/> {''}
                    {title}
                    <button onClick = { this.props.deltodo.bind(this,id)} style={buttonStyle}>x</button>
                    </p>
                    
            </div>
        )
    }

}



Todoitem.propTypes= {
    todos : Proptypes.object.isRequired
}

const buttonStyle = {
    background : "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 8px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"

}
// const itemstyle = {
//     backgroundColor :'#f4f4f4'

export default Todoitem
