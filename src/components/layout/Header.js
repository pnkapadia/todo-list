import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headStyle = {
    background: "#ffbf80",
    color: "#000000",
    textAlign: "center",
    padding: "10px"
}

const linkStyle = {
    color: "#000000",
    textDecoration: "none"
}

export default Header;