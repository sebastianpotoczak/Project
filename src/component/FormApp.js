import {useState} from 'react';



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
        if(name === "" || name > 2){
            alert("Wpisz imię!")
            e.preventDefault()
        }else{
            localStorage.setItem('savedName', name);
        }
        if(phone === "" || phone.length != 9 ){
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

export default FormApp