import { useEffect, useState } from "react";
import { db } from "../db";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { useParams, useNavigate, Link } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, "Contacts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setContact(docSnap.data());
      }
    };

    fetchContact();
  }, [id]);


  const handleDelete = async () => {
    await deleteDoc(doc(db, "Contacts", id));
    navigate("/");
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>Contact Details</h1>

      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Email: {contact.email}</p>

      <br />

      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>

      <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>

      <br /><br />

      <Link to="/"> Back</Link>
    </div>
  );
}

export default Details;