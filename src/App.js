import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import React, { Component } from 'react'
import HomeFetch from "./Component/Home/HomeFetch"
import HomeRatedFetch from "./Component/HomeRated/HomeRatedFetch"
import Header from "./Component/Header/Header"
import DetailId from "./Component/Deatail/DetailId"
import Search from "./Component/Search/SearchFetch"
import Button from "./Component/Button/Button"
import HomeUpcommingFetch from "./Component/HomeUpcoming/HomeUpcommingFetch"
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

<Route  path="/" element={[<Button/>,<HomeFetch/>,<HomeRatedFetch/>,<HomeUpcommingFetch/>]}/>  
<Route path="/details/:id" element={<DetailId/>}/> 
<Route path="/search" element={<Search/>}/> 


</Routes>
</Router>
    
</section > 
    );
  }
}
 
export default App;
