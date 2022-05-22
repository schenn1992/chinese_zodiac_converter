import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

//This is the 12 animals of Chinese zodiac sign
const animalsArray = [
  'rat',
  'ox',
  'tiger',
  'rabbit',
  'dragon',
  'snake',
  'horse',
  'sheep',
  'monkey',
  'rooster',
  'dog',
  'pig',
];

/**
 * This component takes in a birth year value and sets selectedAnimal
 *
 * @param {setSelectedAnimal} setState
 */
const GetBirthYear = ({ setSelectedAnimal }) => {
  const [birthYear, setBirthYear] = useState(0);

  // This function takes in a year and calulate the matching animal index
  const calcAnimalIndex = (year) => {
    return year - 1924 <= 12 ? year - 1924 : (year - 1924) % 12;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (birthYear >= 1924 && birthYear <= 2043) {
      const animalIndex = calcAnimalIndex(birthYear);
      const matchedAnimal = animalsArray[animalIndex];
      setSelectedAnimal(matchedAnimal);
    } else {
      console.log('Incorrect year');
    }
  };

  return (
    <>
      <h1>Zodiac Converter</h1>
      <p>Curious about your Chinese zodiac animal. Let's find out.</p>
      <Card text='white' style={{ width: '18rem' }} className='mb-2 birth-year'>
        <Card.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Control
              className='mb-3'
              type='text'
              placeholder='Enter birth year'
              onChange={(e) => setBirthYear(Number(e.target.value))}
            />

            <Button variant='outline-dark' type='submit'>
              Get Zodiac animal
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default GetBirthYear;
