//Making a fetch request to getContacts route
import React , {useState , useEffect} from 'react'
import AddContact from "./AddContact"
export default function PhoneBook() {
    const [contacts , setContacts] = useState([])

    const fetchContacts = async() => {
        const response = await fetch("http://localhost:8000/getContacts")
        const contacts = await response.json()
        console.log("contacts value is " + JSON.stringify(contacts))
        setContacts(contacts)

    }
    useEffect(() => {
        fetchContacts()
    },[])
    return (
    <div>
        <AddContact/>
        {
            contacts.map((contact) => (
                <div>
                <p>Name:{contact.name} ||  Phone Number:{contact.number}</p>
                </div>
            ))
        }
        
    </div>
)
    }