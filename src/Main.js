import { useState, useEffect, useRef } from "react"
import Card from "./Card";
import persons from "./persons"
const Main = () => {
    console.log(persons)
    return (
        <div className="main">
            <div className="card-wrapper">
                {persons.map((person) => (
                    <Card
                    key={person.id} // Use the unique id as the key prop
                    name={person.name}
                    age={person.age}
                    address={person.address}
                    hobbies={person.hobbies}
                    />
                ))}
            </div>
        </div>
      );
}
 
export default Main;