import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { data } from './data';
import './Place.css';

export const Place = () => {
  const { country, continent } = useParams();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const filteredPlaces = data.continents
      .find((continentObj) => continentObj.name === continent)
      .countries.find((countryObj) => countryObj.name === country)
      .destinations;

    setPlaces(filteredPlaces);
  }, [country, continent]);

  return (
    <div className="App">
      {places.map((item) => (
        <div key={item.id} className="country">
          <img src={item.image} height={'150'} width={'150'} />
          <div className="details">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <div className="info">
              <div className="rating">
                <span>Rating:</span> {item.ratings}
              </div>
              <div className="reviews">
                <span>Reviews:</span> {item.reviews}
              </div>
              <div className="location">
                <span>Location:</span> {item.location}
              </div>
              <div className="opening-hours">
                <span>Opening Hours:</span> {item.openingHours}
              </div>
              <div className="ticket-price">
                <span>Ticket Price:</span> {item.ticketPrice}
              </div>
              <div className="website">
                <span>Website:</span> <a href={item.website}>{item.website}</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


