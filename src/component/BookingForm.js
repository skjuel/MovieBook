import React, { useState } from 'react';
import './BookingForm.css';

function BookingFormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user details in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    // Reset form fields
    setName('');
    setEmail('');
  };

  return (
    <div className="booking-form-card">
      <h1>Booking Form</h1>
      <p>Movie Name: {localStorage.getItem('movieName')}</p>
      {/* <p dangerouslySetInnerHTML={{ __html: localStorage.getItem('movieDetails') }}>Movie Details: {localStorage.getItem('movieDetails')}</p> */}
    
     <p dangerouslySetInnerHTML={{ __html:"<span>Movie Details: <span>" + localStorage.getItem('movieDetails') }}></p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingFormPage;
