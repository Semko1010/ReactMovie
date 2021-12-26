import React, { Component } from 'react'
import Home from './Home'

class HomeFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[],
                    dataNew:[]
                        
        }
    }



componentDidMount(){
  

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=14a38df4244c367a387400bb64bbcc05&language=de`)
        .then(response => response.json())
        .then (json => this.setState({data: json.results }))
       
        
        }
        left=()=>{
            let left=document.querySelector(".sectionGrid").scrollLeft-=500
        }
        right=()=>{
            let left=document.querySelector(".sectionGrid").scrollLeft+=500
        }
    
        render() { 
            console.log(this.state.data);
        return ( <div>
           
            <h2>Beliebteste Filme</h2>
            <div className="sectionGrid">
                 
                <img onClick={this.left} className="btnLeft" src="./SVG/left.svg" alt="" />
                
            {this.state.data.map(e =>
                <Home
                key={e.id}
                id={e.id}
                title={e.title}
                img={e.poster_path}
                voting={e.vote_average}
                release_date={e.release_date}
                />
               

                )}
            
            <img onClick={this.right} className="btnRight" src="./SVG/right.svg" alt="" />
               
            </div>
            </div>
         );
    }
}
 
export default HomeFetch;