import React, { Component } from 'react'
import {Link} from "react-router-dom"



class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div>

            <Link to="/search"><button id="btn" className="btn btn-"onClick={this.props.search}>Klick</button></Link>
                </div> );
    }
}
 
export default Button;