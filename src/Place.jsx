
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { data } from './data';



export const Place = () => {
  const { country, continent } = useParams();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const filteredPlaces = data.continents
        .filter((item) => {
            return item.name === continent;
        })[0].countries
        .filter((item) => {
            return item.name === country;
        })[0].places;
        

    setPlaces(filteredPlaces);
  }, [country, continent]);

  return (
    <div className="App">
      <div className="country">
        {places.map((item) => (
          <div key={item.id} className="country">
            <div>{item.name}</div>
            <div>{item.description}</div>
            <img src={item.image} height={'150'} width={'150'} />
            <div>{item.ratings}</div>
            <div>{item.reviews}</div>
            <div>{item.location}</div>
            <div>{item.openingHours}</div>
            <div>{item.ticketPrice}</div>
            <div>{item.website}</div>

          </div>
        ))}
      </div>
    </div>
  );
};

