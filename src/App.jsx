import React, { useState } from 'react';
import './App.css';
import backgroundImage from './image.png'; // Import the image

function App() {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    address: '',
    phone: '',
    memories: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Slambook Submitted:\n${JSON.stringify(formData, null, 2)}`);
    setFormData({
      name: '',
      nickname: '',
      address: '',
      phone: '',
      memories: '',
      gender: '',
    });
  };

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div className="slambook-container">
        <h1>Slambook</h1>
        <form onSubmit={handleSubmit}>
          
          {/* Name Container */}
          <div className="input-container">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Nickname Container */}
          <div className="input-container">
            <label>Nickname:</label>
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address Container */}
          <div className="input-container">
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Phone Container */}
          <div className="input-container">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Memories Container */}
          <div className="input-container">
            <label>Memories:</label>
            <textarea
              name="memories"
              value={formData.memories}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Gender Container */}
          <div className="input-container">
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
