import React from 'react';
import { FoodInput, FormContainer, Select, Button } from './HeaderStyle';

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

      <Button onClick={getData}>Search</Button>
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
