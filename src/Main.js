import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import persons from "./persons";

const Main = () => {
  const [value, setValue] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  useEffect(() => {
    console.log(value + " new value");

    // Filter persons based on the input value
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPersons(filtered);
  }, [value]);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="main">
      <Navbar onValueChange={handleValueChange} />
      <div className="card-wrapper">
        {filteredPersons.map((person) => (
          <Card
            key={person.id}
            name={person.name}
            age={person.age}
            address={person.address}
            hobbies={person.hobbies}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;