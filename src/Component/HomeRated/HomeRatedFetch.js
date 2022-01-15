import React, { Component } from 'react'
import HomeRated from "./HomeRated"

class HomeRatedFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[],
                    dataNew:[]
                        
        }
    }



componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=14a38df4244c367a387400bb64bbcc05&language=de`)
        .then(response => response.json())
        .then (json => this.setState({dataNew: json.results }))
        
        }
    
        left=()=>{
            document.querySelector(".sectionGridNew").scrollLeft-=500
        }
        right=()=>{
            document.querySelector(".sectionGridNew").scrollLeft+=500
        }
        render() { 
          
        return ( 
            <div>
                <h2>Best Bewertete Filme</h2>
                <article className="sectionGridNew">
                    
            <img style={{boxShadow: "none"}} onClick={this.left} className="btnLeftnew" src="./SVG/left.svg" alt="" /> 
            {this.state.dataNew.map(e =>
                <HomeRated
                key={e.id}
                id={e.id}
                title={e.title}
                img={e.poster_path}
                voting={e.vote_average}
                release_date={e.release_date}
                />
              
                )}
                <img style={{boxShadow: "none"}} onClick={this.right} className="btnRightnew" src="./SVG/right.svg" alt="" /> 
                </article>
                </div>
               
            
         );
    }
}
 
export default HomeRatedFetch;