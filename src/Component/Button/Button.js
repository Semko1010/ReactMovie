import React, { Component } from 'react'
import {Link} from "react-router-dom"





class Button extends React.Component {
state={input:"spiderman"}



    add(){
        let inputNew = document.getElementById("input").value
this.setState({ input:inputNew})
console.log(this.state.input);
    }
    render() { 
     
        return (<div>

            <Link to={`/search`}><button id="btn" className="searchButton" onClick={this.props.search}>Klick</button></Link>
                </div> );
    }
}
 
export default Button;