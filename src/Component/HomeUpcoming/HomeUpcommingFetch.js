import React, { Component } from 'react'
import HomeUpcomming from "./HomeUpcomming"

class HomeUpcommingFetch extends Component {
    constructor(props) {
        super(props);
        this.state = { dataNew:[] }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=14a38df4244c367a387400bb64bbcc05&language=de`)
        .then(response => response.json())
        .then (json => this.setState({dataNew: json.results }))
        
        }
    
        left=()=>{
            document.querySelector(".sectionGridUpcomming").scrollLeft-=500
        }
        right=()=>{
            document.querySelector(".sectionGridUpcomming").scrollLeft+=500
        }

    render() { 
        
        return ( 
<div><h2>Bald verfügbar</h2>
<div className="sectionGridUpcomming">
            
            <img style={{boxShadow: "none"}} onClick={this.left} className="btnLeftnew" src="./SVG/left.svg" alt="" /> 
{this.state.dataNew.map(e =>
    <HomeUpcomming
    key={e.id}
    id={e.id}
    title={e.title}
    img={e.poster_path}
    voting={e.vote_average}
    release_date={e.release_date}
    
    
    />
    )}
    <img style={{boxShadow: "none"}} onClick={this.right} className="btnRightnew" src="./SVG/right.svg" alt="" /> 
        </div> 
        </div>);
    }
}
 
export default HomeUpcommingFetch;