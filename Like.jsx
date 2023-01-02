import React, { useState } from 'react';
const Like = () => {
    
      const [counter, setCounter] = useState(0)
      
   
      const handleClick1 = () => {
        
        setCounter(counter + 1)
      }

      
      return (
        <div >
          
          <div >
            {counter}
          </div>
          <div>
            <button 
              onClick={handleClick1}>Like</button>
            
          </div>
        </div>
      )
      }
    export default Like;