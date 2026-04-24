import { useEffect, useState } from "react";
import { db } from "../db";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams, useNavigate, Link } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  
  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, "Contacts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
      }
    };

    fetchContact();
  }, [id]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "Contacts", id), {
      firstName,
      lastName,
      email
    });

    navigate(`/contact/${id}`);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Contact</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <button type="submit">Update</button>
      </form>

      <br />
      <Link to={`/contact/${id}`}>⬅ Back</Link>
    </div>
  );
}

export default Edit;