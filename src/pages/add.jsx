import { useState } from "react";
import { db } from "../db";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

function Add() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const docRef = await addDoc(collection(db, "Contacts"), {
      firstName,
      lastName,
      email
    });

  
    navigate(`/contact/${docRef.id}`);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Add Contact</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <button type="submit">Add</button>
      </form>

      <br />
      <Link to="/">⬅ Back</Link>
    </div>
  );
}

export default Add;