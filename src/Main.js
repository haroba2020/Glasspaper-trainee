import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import persons from "./persons";
import Footer from "./Footer";

const Main = () => {
  const [value, setValue] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  useEffect(() => {
    console.log(value + " new value");

    // Filter persons based on the input value
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    if(filtered<=0){
        setFilteredPersons([false, value])
    }else{
        setFilteredPersons(filtered);
    }
  }, [value]);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="main">
        <div className="main-wrap">
            <Navbar onValueChange={handleValueChange} />
            <div className="card-wrapper">
                {filteredPersons[0] && filteredPersons.map((person) => (
                <Card
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    address={person.address}
                    hobbies={person.hobbies}
                />
                )) || <h1>User not found with {filteredPersons} </h1> }
            </div>        
        </div>
        <Footer/>
    </div>
  );
};

export default Main;