import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import "./Show.css";

function ShowPage() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const handleBookTicket = () => {
    // Store movie details in local storage
    localStorage.setItem('movieName', show.name);
    localStorage.setItem('movieDetails', show.summary);
    // Redirect to the booking form page
    window.location.href = '/booking';
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
    <h1>{show.name}</h1>
    <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
    <button onClick={handleBookTicket}>Book Ticket</button>
  </div>
  );
}

export default ShowPage;
