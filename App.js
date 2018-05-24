import React from 'react';
import RecipeBox from "./screens/RecipeBox";

export default class App extends React.Component {
  render() {
    const cookies = {title: "Cookies", ingredients: ["sugar", "more sugar", "butter"], instructions: "Mix all ingredients together and bake"};
    const fruitSalad = {title: "Fruit Salad", ingredients: ["grapes", "melon", "raspberries"], instructions: "Mix all ingredients together and serve"};
    const jello = {title: "Jello", ingredients: ["sugar", "gelatin", "water"], instructions: "Mix all ingredients together and chill"};
    const recipes = [cookies, fruitSalad, jello];
    return (
        <RecipeBox recipes={recipes}/>
    );
  }
}
