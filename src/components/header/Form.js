import React from 'react';
import { FoodInput, FormContainer, Select } from './HeaderStyle';

const Form = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    getData()
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search"
      />

      <button onClick={getData}>Search</button>
      <Select
        onChange={(e) => setMeal(e.target.value)}
        name="mealTypes"
        id="mealTypes"
      >
        {mealTypes?.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;
