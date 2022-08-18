import React, { useState } from "react";
import "./HomePage.css";

import { useAddAppMutation } from "../../services/AplicationApi";
function HomePage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [aim, setAim] = useState("");
  const [date, setDate] = useState("");
  const [addApp] = useAddAppMutation();
  // src/AddTask.js
  const handleAddApp = async (e) => {
    if (!name) alert("ism is not");
    else if (!surname) alert("surname is not ");
    else if (!email) alert("email is not");
    else if (!aim) alert("aim is not");
    else if (!date) alert("date is not");
    else {
      e.preventDefault();
      const app = {
        name,
        surname,
        email,
        aim,
        date,
      };
      await addApp(app);
      alert("Aplication added")
    }

  };
  return (
    <div className="homePage">
      <form onSubmit={handleAddApp}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input
          type="text"
          placeholder="Application Aim"
          onChange={(e) => setAim(e.target.value)}
        />
        {/* <textarea dmaxLength={100} cols="60" rows="10">
          Write Aplication
        </textarea> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
