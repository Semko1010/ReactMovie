import React from 'react'
import {Link} from "react-router-dom"





class Button extends React.Component {
state={input:"spiderman"}



    add(){
        let inputNew = document.getElementById("input").value
this.setState({ input:inputNew})
console.log(this.state.input);
    }
    render() { 
     
        return (<div className="searchButton">

            <Link to={`/search`}><button id="btn"  onClick={this.props.search}>Suchen</button></Link>
                </div> );
    }
}
 
export default Button;