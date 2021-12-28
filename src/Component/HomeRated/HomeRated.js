import React, { Component } from 'react'
import { Link } from "react-router-dom"



class HomeRated extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

  
        

        



    render() { 
      
        return ( 
          
        <article >
            
        
        <p>{`Datum:${this.props.release_date}`}</p>
        <img src={`https://image.tmdb.org/t/p/w200${this.props.img}`} alt="" /> 
        <p>{this.props.title}</p>
        <button className="btnLink"><Link className="Link" to={`/details/${this.props.id}`}>Watch Trailer</Link></button>
        <p className="voting">{this.props.voting}</p>
       
        

 
 

        </article>);
    }
}

export default HomeRated;
