import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/Home';
import ShowPage from './component/Show'
import BookingForm from './component/BookingForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/show/:id" element={<ShowPage />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
