
import React, { useState } from 'react';

import jsonData from './myposts.json';
import Form from "./Form";
import Blog from "./Blog";
import Like from "./Like";


const DisplayBlogs = () => {
    
        const [blogs, setBlogs] = useState(jsonData);
        const [searchText, setSearchText] = useState("");
      const [data, setData] = useState(blogs);
        const addBlog = newBlog => {
          setData([...blogs, newBlog]);
        };
        const handleChange = value => {
         setSearchText(value);
         
          filterData(value);
        };
      
        const filterData = (value) => {
          const lowercasedValue = value.toLowerCase().trim();
          console.log(lowercasedValue)
          if (lowercasedValue === "") setData([...blogs])
          else {
            console.log("hi i m in filter data")
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
         <div className='home'>
      
          <React.Fragment>
             <Blog />
             <div className="partie">
             <Form  addBlog={addBlog} />
             </div>
            
             <br />
             <h3 > Search Blog using subject , description or date :</h3>
            <input style={{ width: "40%" }} type="text" placeholder=" Tap here to serach ..."  value={searchText} onChange={e => handleChange(e.target.value)} />
            <br />
            <br />

            <table  style={{ width: "80%" }} className="table">
              <thead className="thead-light">
                <tr>
                  <th>Subject    </th>
                  <th>Description</th>
                  <th>Date       </th>
                  <th>Likes </th>
                 
                </tr>
              </thead>
              <tbody>

                {data.map((data,i) => {
                    return (
                      
                      <tr key={i}>
                       <td>{data.subject}</td>
                        <td>{data.description}</td>
                        <td>{data.date}</td>
                        <td><Like /></td>
                      </tr>
                    );
                
                })}
              </tbody>
            </table>
            {data.length === 0 && <span>No records found to display!</span>}
            <br />
            <br />
           
          </React.Fragment>
          </div>
        );
      };
      export default DisplayBlogs;




    