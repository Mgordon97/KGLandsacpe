import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
     <div className="App">
        <header>
            <div className="logo">
            <Link to={process.env.PUBLIC_URL/KGLandscape + "/"}>Landscape</Link>
            </div>

            <nav>
                <ul>

                    <li className ="first">
                        <Link to={process.env.PUBLIC_URL + "/Design"}>Design A Plant</Link>
                    </li>

                    <li className ="mid">
                        <Link to={process.env.PUBLIC_URL + "/Collection"}>Collection</Link>
                    </li>

                    <li className ="mid">
                        <Link to={process.env.PUBLIC_URL + "/Spec"}>Specifications</Link> 
                    </li>

                    <li className ="mid">
                        <Link to={process.env.PUBLIC_URL + "/Buy"}>How to purchase</Link> 
                    </li>

                    <li className="last">
                    <Link to={process.env.PUBLIC_URL + "/Contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
     
     
     </div>
    );
  }
}

export default Header;
