import React from "react";
import { useState } from "react";

import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import Myblogs from "./Myblogs";


export default function Blog() {
  const [blogs, setBlogs] = useState([
{
        subject:"writting",description:"writting different thoughts and quotes",date:"09/05/2020"
    },{
        subject:"reading",description:"reading books depends on the vast imagination",date:"11/10/2021"
    },{
        subject:"cooking",description:"Become the person who has perfected your food & drink hobby.",date:"07/02/2019"
    },{
        subject:"paint",description:"I love to draw every beautiful thing",date:"03/04/2022"
    },{
        subject:"Handball ",description:"helps to improve skills such as throwing and jumping",date:"21/11/2020"
    },{
        subject:"PC Games",description:"Gaming improves skills of balancing mind ",date:"27/03/2017"
    }
    
    
    ]);
  const addblog = (blog) => {
    setBlogs([...blogs, blog]);
  };
  return (<div className="home">
      <BrowserRouter>
        <nav>
          <div>
            <button>
              <Link
                exact
                to="/myb"
              >
                Display all blogs
              </Link>
            </button>
            <button>
              <Link
                to="/createb"
              >
                Create new blog
              </Link>
            </button>
          </div>
        </nav>
        <Switch>
          <Route exact path="/myb">
            <Myblogs blogs={blogs} />
          </Route>
          <Route path="/createb">
            <CreateBlog addblog={addblog} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}