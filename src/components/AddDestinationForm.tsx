import React, { useState } from 'react'
import { AddDestinationFormProps } from '../types';
import { v4 as uuidv4 } from 'uuid';
import '../assets/styles/addDestinationForm.css';

const AddDestinationForm: React.FC<AddDestinationFormProps> = ({ addDestination }) => {
  const [name, setName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && country && description) {
      const newDestination = {
        id: uuidv4(),
        name,
        country,
        description,
        visited: false,
      };
      addDestination(newDestination);
      setName('');
      setCountry('');
      setDescription('');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Destination Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Destination</button>
    </form>
  );
};

export default AddDestinationForm