import React, { useState } from 'react';
import Index from '../index'
import App from '../index'



const Nav = () => {
    const[change, setChange] = useState(false);
    const url = "http://localhost:3000/#/termin"
    const mainurl = "http://localhost:3000/#/"
    

    const Tooltip = () => {
        if(change === true){
            return  (
              
                <div className="tooltip_contain">   
                    
                     <a className="tooltip_nav" href={mainurl}>Strona głowna</a>
                    <a className="tooltip_nav" href={url} >Terminy</a>
                    
               
               </div>
              
            )        
        }else{
            return <> </>
        }

    }
    const handleClick = () => {
       setChange(prevState => {
           if(prevState === false){
               setChange(true)
           }else{
               setChange(false)
           }
       })
    }
    return(
        <>
       
      <nav>
      <div className="contain">
        <div className="nav_text">
        <a href="#">Be beauty</a>
      <label for="check" >
      <input type="checkbox" id="check" onChange={handleClick}/>  
      <span></span>
      <span></span>
      <span></span>
     </label>   
    </div>
    <Tooltip /> 
    </div>
      </nav>
     
     
      
        </>
    )
  }

  export default Nav;