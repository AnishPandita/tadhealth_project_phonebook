#adding middleware and defining response on navigating to entry point of app
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from fastapi import Response
from tinydb import TinyDB
import base64
app = FastAPI()

token =""
#allowed origins
origins = [
    "http://localhost:3000",
    "localhost:3000",
    "*"
]

db = TinyDB('db.json')


# adding CORS middleware for cross origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
# POST API Route for pushing user data to database
i = 0
key = "secret key"
@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"first":"response"}

@app.post("/phoneNumber", tags=["numbers"])
async def add_contact(contact:dict)->dict:
    number = contact['number']
    print("number is " , number)
    # Encoding the number to store hashed value in the database
    encNumber = base64.b64encode(number.encode())
    contact['number'] = encNumber.decode()
    db.insert(contact)
    i+=1
    print("contact data received is " , contact)
    
    return {
        "data":{"Contact added"}
    }
# GET API Route to fetch all user data from the database
@app.get("/getContacts")
async def get_contacts():
    contacts_current = db.all()
    contacts_decrypted = []
    for contact in contacts_current:
        number = contact['number']
        # Decoding the number to display plaintext output at frontend.
        contact['number'] = base64.b64decode(number.encode())
        contacts_decrypted.append(contact)
    print(contacts_decrypted)
    return contacts_decrypted


