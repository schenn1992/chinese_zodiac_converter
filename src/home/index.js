import React, { useState } from 'react';
import GetBirthYear from './components/GetBirthYear';
import './index.css';
import AnimalYearTitle from './components/AnimalYearTitle';

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
          <AnimalYearTitle selectedAnimal={selectedAnimal}></AnimalYearTitle>
        ) : (
          <GetBirthYear setSelectedAnimal={setSelectedAnimal} />
        )}
      </div>
    </>
  );
};

export default Home;
