import React from 'react';

function Header(){

    return (
        <header style = {headStyle}>
            <h1> To-Do-List</h1>
        </header>
    )
}

const headStyle = {

    textAlign : 'center',
    background : "#333",
    color : "white",
    padding : "10px",
    fontSize : "20px"
}

export default Header;