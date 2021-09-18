import FormApp from "./FormApp";
import CalendarAwesome from 'react-awesome-calendar';
import {useState, useEffect} from 'react';
import Service from "./Service";
import { faEarlybirds } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import Footer from "./Footer";

const AppView = () =>{
 

    const Calendary = () => {


        const[day, setDay] = useState("");
        const[click, setClick] = useState(false);
        const[events, setEvents] = useState(null)


        useEffect(() => {
            fetch("http://localhost:3005/events")
            .then(response => {
                if (response.ok) {
                   return response.json();
    
                } else  {
                    throw new Error(" network error!");
                }
            })
            .then(data => setEvents(data))
            .catch(err => console.log(err));
        }, [])
    
   
        const handleClick = () => {
            setClick(true)
        }

        const changeDate = () => {
            const takeDay = document.querySelector(".calendarHeader > h1")
            setDay(takeDay.innerText)
        }
     
     
       if(click === false){
           return (
               <>
            <div className="calendary_position">
            <div className="login_text_position">
            <h1>Ustal date wizytu juz teraz!</h1>
            <h2>Sprawdz Termin!</h2>
           <CalendarAwesome events={events} onChange={changeDate} onClickTimeLine={handleClick}/>
           </div>
            </div>         
            <Footer />

            </>
           )
       }else{
           return(
               <>
            <Service props={day}/>
            <Footer />
            </>
           )
       }
    }


    if(localStorage.getItem('savedName') === null && localStorage.getItem('savedPhone') === null){
        return  (
            <>  
            <div className="text_position">
                <div className="text_contain">
                <h1>Ustal date wizytu juz teraz!</h1>           
                <FormApp />

                </div>
          
            </div>
        </>
        )
    }else{
        return(
            <>
                <Calendary />
            </>
        )  
    }
    
}


export default AppView;