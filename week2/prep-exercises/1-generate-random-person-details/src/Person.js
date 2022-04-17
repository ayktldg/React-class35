import React from "react";

const Person = ({ firstName, lastName, email }) => {
  return (
    <div>
      <ul className="person__info">
        <li key={firstName}>{firstName}</li>
        <li key={lastName}>{lastName}</li>
        <li key={email}>{email}</li>
      </ul>
    </div>
  );
};

export default Person;
