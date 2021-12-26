import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React, { Component } from 'react'
import HomeFetch from "./Component/Home/HomeFetch"
import HomeRatedFetch from "./Component/HomeRated/HomeRatedFetch"
import Header from "./Component/Header/Header"
import DetailId from "./Component/Deatail/DetailId"
import Details from "./Component/Deatail/Details"
import DetailFetch from "./Component/Deatail/DetailFetch"

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  
  }
  }





  render() { 
    
   
    
    return ( 
  
      <section >
    <Router>
   
    <Header/>
    
    
   
   
   
<Routes>

<Route  path="/" element={[<HomeFetch/>,<HomeRatedFetch/>]}/>  



<Route path="/details/:id" element={<DetailId/>}/> 

</Routes>
</Router>
    
</section > 
    );
  }
}
 
export default App;
