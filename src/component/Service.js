import { useState, useEffect } from "react"



const Service = ( {props} ) => {
    const[service ,setService] = useState("");
    const[hour, setHour] =useState("")


    let takeName = localStorage.getItem('savedName');
    let takePhone =localStorage.getItem('savedPhone');
  
    const handleClear = e => {
        
        localStorage.clear('savedName');
        localStorage.clear('savedPhone')
    }
    const services = e => {
        const newService = e.target.value;
        setService(newService);
    }
    const handleHour = e => {
        const newHour = e.target.value;
        setHour(newHour);
    }

    return(
        <>
            <div className="service_contain">
                <div className="contain">
                <div className="service_position">
                    <div>
                    <h1>Witaj {takeName}!</h1>
                    <h2>Twój numer telefonu: {takePhone}</h2>
                    <h2 >Data: {props}</h2>
                    <h2>Usługa: {service}</h2>
                    <h2>Godzina: {hour}</h2>
             <form>
                <select onChange={services} value={Service}>
                    <option value="" disabled>
                        Wybierz usługe
                    </option>
                     <option>Makijaż imprezowy</option>
                        <option>Makijaż weselny</option>
                        <option>Makijaż pernamentny</option>                 
                </select>
                
            </form>
            <form>
            <select onChange={handleHour} value={hour}>
                    <option value="" disabled>
                        Wybierz godzine!
                    </option>
                     <option>8:00</option>
                        <option>9:00</option>
                        <option>10:00</option>         
                </select>
            </form>
         
            <a href="http://localhost:3000/#/termin" onClick={handleClear}>Reset danych osobowych!</a>
            <input type="submit"></input>
         
                    </div>
                  
         
                </div>
                </div>
               
            </div>
        </>
    )
}

export default Service