import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Home.css";

function HomePage() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <div className="card-container">
        {shows.map(show => (
          <div className="card" key={show.show.id}>
            <img src={show.show.image?.medium} alt={show.show.name} />
            <div className="card-content">
              <h2>{show.show.name}</h2>
              {show.show.summary}
              <Link to={`/show/${show.show.id}`} className="btn-details">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
