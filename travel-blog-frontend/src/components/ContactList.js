import React, { useState, useEffect } from 'react';
import './styles/print.css'; // Import the CSS file if you are using an external file

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/contact');
        const data = await response.json();
        setContacts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Contact List</h2>
      <div className="printableArea">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default ContactList;
