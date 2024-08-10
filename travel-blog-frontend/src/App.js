import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';

/*import Login from './components/login';
import Signup from './components/Signup';*/
import TravelTips from './components/TravelTips';
import TravelGuides from './components/TravelGuides';
/*import PhotoGalleries from './components/PhotoGalleries';*/
import InteractiveMap from './components/InteractiveMap';
import ContactList from './components/ContactList';
import './styles/style.css';



function App() {
  return (
    <Router>
      <header>
        <h1>Travel and Adventure Blog</h1>
        <nav>
          
          <Link to="/guides">Travel Guides</Link>
          <Link to="/tips">Travel Tips</Link>
          <Link to="/map">Interactive Map</Link>
          <Link to="/contacts">Contact List</Link> 
        </nav>
      </header>
      <Routes>
        
        <Route path="/guides" element={<TravelGuides />} />
        
        <Route path="/tips" element={<TravelTips />} />
        <Route path="/map" element={<InteractiveMap />} />
        <Route path="/contacts" element={<ContactList />} /> {/* Add route for ContactList */}
        
        
      </Routes>
    </Router>
  );
}

export default App;

