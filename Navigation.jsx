import React from "react";
import { Link } from "react-router-dom";
class Navigation extends React.Component {
    render() {
       
      
      return(
        <nav>
          <Link className="first" to="/">Home</Link>
          <div className="links">
            <Link to="/contact">Contact</Link>
            <br/>
            <Link to="/blog">Blog</Link>
           
          </div>
           
        </nav>
      );
    }
  }
export default Navigation;