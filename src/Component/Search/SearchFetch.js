import Button from "../Button/Button"
import React, { Component } from 'react'
import Header from '../Header/Header'
let a =1
let searchArray ="";
let btn = document.getElementById("btn")
class SearchFetch extends Component {
    
    constructor(props) {
        super(props);
        this.state = { search:[] }
    }

//     componentDidUpdate(){
//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=14a38df4244c367a387400bb64bbcc05&query=${searchArray}`)
//     .then (response => response.json())
//     .then(json => this.setState({ search:json.results[0]}))
// }


search=()=>{
    const timer2=setTimeout(() =>{
    let input = document.getElementById("input").value
    searchArray = input
    console.log(searchArray);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=14a38df4244c367a387400bb64bbcc05&query=${searchArray}`)
    .then (response => response.json())
    .then(json => this.setState({ search:json.results}))
    console.log("test");
},1000)
}



    render() { 
       
        console.log(this.state.search);
        return (
            <div>
          
            <Button
            search={this.search}
            />
           {this.state.search.map(e =>
            <p>{e.title}</p>
            
            )}
               
            </div>
          );
    }
}
 
export default SearchFetch;