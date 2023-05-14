import { useState, useEffect, useRef } from "react"
import Navbar from "./Navbar";
import Card from "./Card";
import persons from "./persons"
const Main = () => {
    const [value, setValue] = useState('');

    const handleValueChange = (newValue) => {
      setValue(newValue);
      console.log(value + ' new value')
    };
    return (
        <div className="main">
            <Navbar onValueChange={handleValueChange} />
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