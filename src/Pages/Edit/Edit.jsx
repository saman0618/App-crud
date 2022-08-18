import React, { useState } from "react";
import { useParams } from "react-router-dom";
// src/EditApp.js
import {
  useUpdateAppMutation,
  useAppQuery,
} from "../../services/AplicationApi";
import "./Edit.css";
function Edit() {
  const { id } = useParams();
  const { data: post, isSuccess, isLoading } = useAppQuery(id);
  const [updateApp] = useUpdateAppMutation();
  const [name, setName] = useState(post && post.name);
  const [surname, setSurname] = useState(post && post.surname);
  const [email, setEmail] = useState(post && post.email);
  const [date, setDate] = useState(post && post.date);
  const [aim, setAim] = useState(post && post.aim);
  console.log(post);
  const handleUpdateApp = (e) => {
    e.preventDefault();
    const App = {
      name,
      surname,
      email,
      aim,
      date,
      id,
    };
    updateApp(App);
    alert("Aplication edited")
  };
  return (
    <div className="edit">
      <form onSubmit={handleUpdateApp}>
        <input
          value={name && name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={surname && surname}
          type="text"
          placeholder="Surname"
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          value={email && email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="date" onChange={(e) => setDate(e.target.value)} 
        value={ date && date}/>
        <input
          value={aim && aim}
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

export default Edit;
