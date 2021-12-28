import Button from "../Button/Button"
import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Home from '../Home/Home'

let searchArray ="";

class SearchFetch extends Component {
    
    constructor(props) {
        super(props);
        this.state = { search:[] }
    }

    componentDidMount(){
        
    let input = document.getElementById("input").value
    searchArray = input
    console.log(searchArray);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=14a38df4244c367a387400bb64bbcc05&query=${searchArray}`)
    .then (response => response.json())
    .then(json => this.setState({ search:json.results}))
    console.log("test");
}


search=()=>{
    
    let input = document.getElementById("input").value
    searchArray = input
    console.log(searchArray);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=14a38df4244c367a387400bb64bbcc05&query=${searchArray}`)
    .then (response => response.json())
    .then(json => this.setState({ search:json.results}))
    console.log("test");

}



    render() { 
       
        console.log(this.state.search);
        return (
            <div>
         
            <Button
            search={this.search}
            />
                   <div class="homeBtnBack">
          <Link to="/"><button >Home</button></Link>
          </div>
          <div class="h2Section">
            <h2>Alle Filme</h2>
            </div>
            <section className="searchSection">
           {this.state.search.map(e =>
            <Home
            
            key={e.id}
            id={e.id}
            title={e.title}
            img={e.poster_path}
            voting={e.vote_average}
            release_date={e.release_date}
            
            
            />
            
            )}
               </section>
            </div>
          );
    }
}
 
export default SearchFetch;