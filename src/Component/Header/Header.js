import React, { Component } from 'react'
import {Link} from "react-router-dom"

const Header = (props) => {
    return ( 
    <header>
        <input id="input" type="text" placeholder="Film Suchen" />
        
        <button onClick={props.search}><Link to="/search"> Search</Link></button>
        </header> );
}
 
export default Header;