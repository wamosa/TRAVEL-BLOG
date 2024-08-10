import React, { useState } from 'react';
import './styles/HomePage.css';
/*import ContactList from './ContactList'; */

const TravelTips = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone })
      });

      if (!response.ok) {
        if (response.status === 409) {
          setResponseMessage('Duplicate entry detected. Please use a unique email and phone number.');
        } else {
          throw new Error('Network response was not ok');
        }
      } else {
        const result = await response.text();
        setResponseMessage(result);
        // Reset form fields
        setName('');
        setEmail('');
        setPhone('');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Error occurred while submitting the form.');
    }
  };


  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4E-wyVnt7keXJWundBvvrmcsZ8gh0o0hjw&s" alt="Travel and Adventure" />
        <div className="hero-text">
          <h1>Welcome to Our Travel and Adventure Blog</h1>
          <p>Discover the world through our eyes</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-us">
        <h2>Contact Us Today</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </section>
      
      

      {/* Social Media Links */}
      <section className="social-media-links">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>

      {/* Recent Comments or Testimonials */}
      <section className="recent-comments">
        <h2>What Our Readers Say</h2>
        <div className="comments">
          <blockquote>
            <p>"Amazing travel tips and beautiful photos!"</p>
            <footer>- A Happy Reader</footer>
          </blockquote>
          <blockquote>
            <p>"I love following your adventures. Keep it up!"</p>
            <footer>- Another Happy Reader</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default TravelTips;
