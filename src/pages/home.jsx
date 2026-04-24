import { useEffect, useState } from "react";
import { db } from "../db";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getDocs(collection(db, "Contacts"));

      const list = data.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      list.sort((a, b) => a.lastName.localeCompare(b.lastName));

      setContacts(list);
    };

    fetchContacts();
  }, []);

  const filtered = contacts.filter(c =>
    (c.firstName + " " + c.lastName)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>Contacts</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px" }}
      />

      {filtered.map((c) => (
        <div key={c.id}>
          <Link to={`/contact/${c.id}`}>
            <p>{c.firstName} {c.lastName}</p>
          </Link>

          <p>{c.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}


export default Home;