import React from "react";
import { useState } from "react";

const Mycontacts = ({ contacts }) =>{
 
  const [searchText, setSearchText] = useState("");
const [contact, setContact] = useState(contacts);
  const addContact = newContact => {
    setContact([...contacts, newContact]);
  };
  const handleChange = value => {
   setSearchText(value);
   
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    console.log(lowercasedValue)
    if (lowercasedValue === "") setContact([...contacts])
    else {
      console.log("hi i m in filter data")
      const filteredData = contact.filter(item => {
        return Object.keys(item).some(key =>
           item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      console.log(filteredData);
      setContact(filteredData);
    }
  }


    return (
      <div className="home ">
      <React.Fragment>
            
             
            
             <br />
             <h3 > Search Contact using Name , Surname , Phone Number or email :</h3>
            <input style={{ width: "40%" }} type="text" placeholder=" Tap here to serach ..."  value={searchText} onChange={e => handleChange(e.target.value)} />
            <br />
            <br />

            <table  style={{ width: "80%" }} className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name Surname :   </th>
                  <th>Phone Number :  </th>
                  <th>Adresse Email :      </th>
                  
                 
                </tr>
              </thead>
              <tbody>

                {contact.map((contact,i) => {
                    return (
                      
                      <tr key={i}>
                       <td>{contact.name}</td>
                        <td>{contact.number}</td>
                        <td>{contact.email}</td>
                       
                      </tr>
                    );
                
                })}
              </tbody>
            </table>
            {contact.length === 0 && <span>No records found to display!</span>}
            <br />
            <br />
           
          </React.Fragment>
      
      <div className="contacts">
        {contacts.map((contact) => (
          <div className="contact" key={contact.number}>
           
          </div>
        ))}
      </div></div>
    );
  };
  export default Mycontacts;