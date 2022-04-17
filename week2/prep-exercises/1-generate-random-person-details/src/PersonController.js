import React from "react";
import { useState, useEffect } from "react";
import Person from "./Person";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    getPerson();
  }, []);
  console.log(person);

  const getPerson = async () => {
    const data = await fetch("https://www.randomuser.me/api?results=1");
    const jsonData = await data.json();
    setPerson(jsonData.results[0]);
  };

  return (
    <div>
      {person && (
        <Person
          firstName={person.name.first}
          lastName={person.name.last}
          email={person.email}
        />
      )}
    </div>
  );
};

export default PersonController;
