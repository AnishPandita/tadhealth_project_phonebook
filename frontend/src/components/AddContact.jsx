// Using Event Handlers to set name and number for the user.
import React from 'react';


export default function AddContact(){
    const [number,setNumber] = React.useState("")
    const [name , setName] = React.useState("")

    const handleNumberChange = event => {
        setNumber(event.target.value)
    }

    const handleNameChange = event => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        const newContact = {
            "number": number,
            "name": name
        }
        //POST request to fetch the phonenumber
        fetch("http://localhost:8000/phoneNumber",{
            method:"POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newContact)
        })
    }
    //Parsing the data on form Submit 
    return (
        <form onSubmit={handleSubmit}>
           
                <input type="text"
                placeholder = "Enter the phone number"
                onChange = {handleNumberChange}/>
                <input type = "text"
                placeholder = "Enter the full name"
                onChange = {handleNameChange}/>
                <button type="submit">Add Contact</button>
            </form>
    )

}