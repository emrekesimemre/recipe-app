import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { HomeImg, ImgDiv, MainContainer } from './HomeStyle';
import RecipeCardComp from './RecipeCardComp';
import homeSvg from '../../assets/home.svg';

const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
const APP_ID = '5c576268';
const APP_KEY = 'd020bac5055b77efb1c50ae734cc515c';

const Home = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== '') {
      const result = await axios.get(url);
      console.log(result);
      if (result.data.more) {
        console.log('no food a this name');
      }
      setRecipes(result.data.hits);
      setQuery('');
    } else {
      console.log('please fill the form');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
