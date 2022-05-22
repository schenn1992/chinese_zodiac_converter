import React, { useState } from 'react';
import GetBirthYear from './components/GetBirthYear';
import './index.css';

/**
 * This the the main component that dynamically renders the view
 */
const Home = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <>
      {selectedAnimal && (
        <div
          style={{ backgroundColor: 'var(--red)' }}
          onClick={() => {
            setSelectedAnimal();
          }}
        >
          {'<-- Back'}
        </div>
      )}
      <div className='background'>
        {selectedAnimal ? (
          <h1>Year of {selectedAnimal}</h1>
        ) : (
          <GetBirthYear setSelectedAnimal={setSelectedAnimal} />
        )}
      </div>
    </>
  );
};

export default Home;
