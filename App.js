import Home from "./mes_composants/Home";
import Contact from "./mes_composants/Contact";
import Blog from "./mes_composants/Blog";
import Like from "./mes_composants/Like";


import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "./mes_composants/Navigation";
import './App.css';
function App() {
 
  return (
    <div className="tout">
      <BrowserRouter>
      <Navigation />
        
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/blog"><Blog /></Route>
          <Route path="/like"><Like /></Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;