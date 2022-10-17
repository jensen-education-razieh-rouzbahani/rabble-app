import React from 'react';
import { useState } from 'react';
import useFetchData from '../useFetchData';
import Checkouts from './Checkouts';
import './OffersList.css';

const url = 'https://rabble-backend.herokuapp.com/offers';

const OffersList = () => {
  const { data: offers, isPending } = useFetchData(url);
  const [clickedIndex, setClickedIndex] = useState({});

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };

  console.log(offers);
  return (
    <>
      <h1>Rabble Offers</h1>
      <section className='offers-section'>
        {isPending && <div>Loading...</div>}
        {offers?.map((offer, index) => (
          <div className='offers-cart' key={offer.id}>
            <h3>{offer.title}</h3>
            <button className='btn-checkouts' onClick={handleClick(index)}>
              checkouts
            </button>
            {clickedIndex[index] && <Checkouts {...offer} />}
          </div>
        ))}
      </section>
    </>
  );
};

export default OffersList;
