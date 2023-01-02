import React from "react";
import { useState } from "react";
import like from "./Like";


const Myblogs = ({ blogs }) =>{
  
 
  const [searchText, setSearchText] = useState("");
const [blog, setBlog] = useState(blogs);
  const addBlog = newBlog => {
    setBlog([...blogs, newBlog]);
  };
  const handleChange = value => {
   setSearchText(value);
   
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    console.log(lowercasedValue)
    if (lowercasedValue === "") setBlog([...blogs])
    else {
      console.log("hi i m in filter data")
      const filteredData = blog.filter(item => {
        return Object.keys(item).some(key =>
           item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      console.log(filteredData);
      setBlog(filteredData);
    }
  }


    return (
      <div className="home">
      <React.Fragment>
            
             
            
             <br />
             <h3 > Search Blog using Subject , Description , or Date :</h3>
            <input style={{ width: "40%" }} type="text" placeholder=" Tap here to serach ..."  value={searchText} onChange={e => handleChange(e.target.value)} />
            <br />
            <br />
            <table  style={{ width: "80%" }} className="table">
              <thead className="thead-light">
                <tr>
                  <th>Subject      :   </th>
                  <th>Description  :  </th>
                  <th>Date :      </th>
                  <th>Like :      </th>
                  
                  
                 
                </tr>
              </thead>
              <tbody>

                {blog.map((blog,i) => {
                    return (
                      
                      <tr key={i}>
                       <td>{blog.subject}</td>
                        <td>{blog.description}</td>
                        <td>{blog.date}</td>
                        <td><like /></td>
                       
                      </tr>
                    );
                
                })}
              </tbody>
            </table>
            {blog.length === 0 && <span>No records found to display!</span>}
            <br />
            <br />
           
          </React.Fragment>
          </div>
     
    );
  };
  export default Myblogs;