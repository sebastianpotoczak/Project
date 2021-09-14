import { useState } from 'react';
import Calendary from 'react-calendar'


const FormApp = () => {
    const[name, setName] = useState("");
    const[phone, setPhone] = useState("")

   const handleChange = (e) =>{
       const newName = e.target.value
        setName(newName)
    }
    const handleChangePhone = (e) => {
        const newPhone = e.target.value
        setPhone(newPhone)
    }
    const sendSubmit = (e) =>{
        if(name === ""){
            alert("Wpisz imię!")
            e.preventDefault()
        }else{
            localStorage.setItem('savedName', name);
        }
        if(phone === ""){
            alert("Wpisz prawidłowy numer telefonu!")
            e.preventDefault()
        }else{
            localStorage.setItem('savedPhone', phone);
        }
        
    }

    return(
        
        <form className="form"> 
            <label className="form_contain">
                
                <p>Podaj imię!</p>
                <input className="input_value" onChange={handleChange} value={name} type="text" name="name"></input>
               <p> Podaj numer telefonu!</p>
                <input className="input_value" onChange={handleChangePhone} value={phone} type="text" name="phone number"></input>
          
            <input onClick={sendSubmit} type="submit" value="Wyślij" className="send_button"/>
            </label>
        </form>
    )
}

const App = () =>{

    let takeName = localStorage.getItem('savedName');
    let takePhone =localStorage.getItem('savedPhone')

    const handleClear = () => {
        localStorage.clear('savedName');
        localStorage.clear('savedPhone')
            
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
            <div className="calendary_position">
            <div className="login_text_position">
            <h1>Ustal date wizytu juz teraz!</h1>
            <h2>Wybierz termin</h2>
            <h1>Witaj {takeName}!</h1>
            <button onClick={handleClear}/>
          
            <Calendary />


            </div>
            </div>
           
            </>
        )  
    }
}

const Calendar = () => {
    

    return(
        <>
        <App />
        </>

    )
}





export default Calendar;
