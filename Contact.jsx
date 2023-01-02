import React from "react";
import { useState } from "react";

import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
import CreateContact from "./CreateContact";
import Mycontacts from "./Mycontacts";


export default function Contact() {
  const [contacts, setContacts] = useState([{
   name: "Benfetima inas",
    number: "0799876543",
    email: "inasbenfetima@gmail.com",
   
  },
  {
    name: "Maiche karima",
     number: "0665987653",
     email: "Maiche karima@gmail.com",
    
   }]);
  const addcontact = (contact) => {
    setContacts([...contacts, contact]);
  };
  return (<div className="home">
      <BrowserRouter>
        <nav>
          <div>
            <button>
              <Link
                exact
                to="/myc"
              >
                Display all contacts
              </Link>
            </button>
            <button>
              <Link
                to="/createc"
              >
                Create new contact
              </Link>
            </button>
          </div>
        </nav>
        <Switch>
          <Route exact path="/myc">
            <Mycontacts contacts={contacts} />
          </Route>
          <Route path="/createc">
            <CreateContact addcontact={addcontact} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}