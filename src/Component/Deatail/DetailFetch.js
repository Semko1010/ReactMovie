import React, { Component } from 'react'
import Details from "./Details"
import {Link} from "react-router-dom"

class DetailFetch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            detail:[],
            video:[],
            
         }
    }
    // https://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=14a38df4244c367a387400bb64bbcc05&language=de
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=14a38df4244c367a387400bb64bbcc05&language=de`)
        .then(response => response.json())
        .then (json => this.setState({detail: json}))
        
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=14a38df4244c367a387400bb64bbcc05&language=de`)
    .then(response => response.json())
    .then (json => this.setState({video: json.results[0].key}))
    }
  
  
    render() { 
        console.log(this.state.video);
        
        return (
       
        
        <div>
            <Link to="/"><button>Back</button></Link>
            
            <h2>Film Infos</h2>
            <Details
            id={this.state.detail.id}
            img={this.state.detail.poster_path}
            title={this.state.detail.title}
            overview={this.state.detail.overview} 
            homepage={this.state.detail.homepage}
            video={this.state.video}   
            
            
            />

            
            </div>
         );
    }
}
 
export default DetailFetch;