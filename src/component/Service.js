
import { useState, useEffect } from "react"
import randomColor from "randomcolor";
import Footer from "./Footer";


const Service = ( {props, events} ) => {
    const[service ,setService] = useState("");
    const[hour, setHour] =useState("")

   
    let color = randomColor();


    let takeName = localStorage.getItem('savedName');
    let takePhone =localStorage.getItem('savedPhone');

    const handleClear = e => {
        
        localStorage.clear('savedName');
        localStorage.clear('savedPhone');
        window.location.reload()

    }


    const services = e => {
        const newService = e.target.value;
        setService(newService);      
    }


    const handleHour = e => {
        const newHour = e.target.value;
        setHour(newHour);
      
    }



    const handleFormSubmit = () => {

        const dateChange = events.find(el => el.from === `${props[1]}-${props[2]}-${props[3]}T${hour}:00:00+00:00`);
        
        if (dateChange) {
            alert("Termin jest już zajęty")

            return
        }

        if(service === "" || hour === ""){
            alert("Wybierz usługę i godzine");

        }else{
            window.location.reload();   
            const dataToSend = {
            color,
             from: `${props[1]}-${props[2]}-${props[3]}T${hour}:00:00+00:00`,
             to: `${props[1]}-${props[2]}-${props[3]}T${hour}:55:00+00:00`,
             title: `Imię: ${takeName} ||  telefon: ${takePhone}  || usługa: ${service}`   
        }
    
        fetch(` http://localhost:3005/events`, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            },
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                alert("termin jest juz zajęty!");
            }
        })
        }
        }
        
    return(
        <>
            <div className="service_contain">
                <div className="contain">
                <div className="service_position">
                    <div>
                    <h1>Witaj {takeName}!</h1>
                    <h2>Twój numer telefonu: {takePhone}</h2>
                    <h2 >Data: {props[0]} </h2>
                    <h2>Usługa: {service} </h2>
                    <h2>Godzina: {hour} : 00</h2>
             <form>
            
                <select onChange={services} value={service}>
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
                    <option disabled value="">Wybierz godzine  </option>
                    <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option>10</option> 
                        <option>11</option>             
                        <option>13</option>    
                        <option>14</option>    
                        <option>15</option>    
                        <option>16</option>    
                        <option>17</option>   
                        <option>18</option>   
                        <option>19</option>   
                </select>
            </form>
            <div className="submit_contain"> 
                
                <input type="submit" className="add_service" onClick={handleFormSubmit}></input>
                <a href="#" onClick={handleClear}>Reset danych osobowych!</a>
         
            </div>
         
         
                    </div>
                  
         
                </div>
                </div>
               
            </div>
          
        </>
    )
}

export default Service