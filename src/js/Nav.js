import { render } from '@testing-library/react';
import React, { useState } from 'react';



const Nav = () => {
    const[change, setChange] = useState(false);
    
    const Tooltip = () => {
        if(change === true){
            return  (
                <div className="tooltip_contain">           
                    <a className="tooltip_nav" href="#">Strona główna</a>
                    <a className="tooltip_nav" href="#">Terminy</a>
                    <a className="tooltip_nav" href="#">Kontakt</a>
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
        <a href="#">Ania x beauty</a>
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