import { Character } from '@/types';
import Image from 'next/image';
import React from 'react';

const Character = ({
  gender,
  image,
  location,
  name,
  status,
}: Omit<Character, '__typename' | 'id'>) => {
  return (
    <div className='mx-3 my-3'>
      <Image src={image} alt={name} width={300} height={300} />
      <p>Gender: {gender}</p>
      <p>Location: {location.name}</p>
      <p>Location: {location.type}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default Character;
