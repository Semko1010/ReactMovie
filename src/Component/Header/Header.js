import React, { Component } from 'react'

import SearchFetch from "../Search/SearchFetch"


class Header extends Component {
   


    render() { 
        return ( <header>
            <input id="input" type="text" placeholder="Film Suchen" />
            
            
            </header>  );
    }
}
 
export default Header;