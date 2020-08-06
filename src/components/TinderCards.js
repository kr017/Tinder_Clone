import React,{useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './assets/TinderCards.css'

import database from "../firebase"; //db

export default function TinderCards() {

    const [people,setPeople]=useState([
        {
            name:"Elon",
            url:"https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg"
        },
        {
            name:"Zuku",
            url:"https://upload.wikimedia.org/wikipedia/commons/e/ef/MarkZuckerberg.jpg"
        }
    ]); 
    //people=[];
    //setPeople is modifier people.push("Kiran")
    //it tells react to rerender the state

    //based on condition
    useEffect(()=>{
        //actual code
        
        //runs only once when component loads 

        database.collection('people') //whole collection of people from firebase
        .onSnapshot(snapshot=>(
           setPeople(snapshot.docs.map(doc =>doc.data()))
        ))
    
    },[])   //whenever the prople changes


    return (
        <div>
        <h1></h1>
        {people.map(person=>(

            
        <div className="tinderCards__cardContainer">
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up','down']} 
            >
                <div
                style={{backgroundImage:`url(${person.url})`}}
                className="card"
                >
                <h3>{person.name}</h3>
                </div>

            </TinderCard>
        </div>

        ))}
        </div>
    )
}
