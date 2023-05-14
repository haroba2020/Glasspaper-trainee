import React, { useState } from "react";

const Card = ({ name, age, address, hobbies }) => {
  const { street, zipcode } = address; // Extract street and zipcode from the address object
  const [hobbiesActive, setHobbiesActive] = useState(false);
  const renderHobbies = () => {
    return hobbies.map((hobby, index) => (
      <li key={index}>{hobby.name}:{hobby.type}</li>
    ));
  };

  const toggleHobbies = () => {
    setHobbiesActive(!hobbiesActive);
  };

  return (
    <div className="card">
      <div className="card-title">
        <h1>{name}</h1>
        <h2>{age}</h2>
      </div>
      <div className="hobbies">
        {hobbiesActive && <ul>{renderHobbies()}</ul>}
      </div>
      <div className="card-footer">
        <p>{street + ': ' + zipcode}</p>
        <button onClick={toggleHobbies} className="custom-button">
          {hobbiesActive ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default Card;
