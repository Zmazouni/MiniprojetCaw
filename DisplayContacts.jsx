
import React, { useState } from 'react';

import jsonData from './myycontacts.json';
import Formulaire from "./Formulaire";
import Contact from "./Contact";


const DisplayContacts = () => {
    
        const [contacts, setContacts] = useState(jsonData);
        const [searchText, setSearchText] = useState("");
      const [data, setData] = useState(contacts);
        const addContact = newContact => {
          setData([...contacts, newContact]);
        };
        const handleChange = value => {
         setSearchText(value);
         
          filterData(value);
        };
      
        const filterData = (value) => {
          const lowercasedValue = value.toLowerCase().trim();
          console.log(lowercasedValue)
          if (lowercasedValue === "") setData([...contacts])
          else {
            
            const filteredData = data.filter(item => {
              return Object.keys(item).some(key =>
                 item[key].toString().toLowerCase().includes(lowercasedValue)
              );
            });
            console.log(filteredData);
            setData(filteredData);
          }
        }
      
        return (
          <div className="home">
          <React.Fragment>
            <Contact />
            
            <br />
             <h3> Search Contact using name , phone number or email :</h3>
            
            <input style={{ width: "80%"  }}  type="text" placeholder=" Tap here to search"  value={searchText} onChange={e => handleChange(e.target.value)} />
            <br />
            <br />
            <table  style={{ width: "80%"  }} className="table">
              <thead className="thead-light">
                <tr>
                <th>Full Name</th>
                  <th>Phone Number</th>
                  <th>Email Address</th>
                  
                </tr>
              </thead>
              <tbody>
                {data.map((data,i) => {
                    return (
                      <tr key={i}>
                        
                        <td>{data.name}</td>
                        <td>{data.number}</td>
                        <td>{data.email}</td>
                        
                      </tr>
                    );
                
                })}
              </tbody>
            </table>
            {data.length === 0 && <span>No records found to display!</span>}
            <br />
            <br />
            <div className='partie'>
            < Formulaire addContact={addContact}  />
            </div>
            
          </React.Fragment>
          </div>
        );
      };
      export default DisplayContacts ;




    