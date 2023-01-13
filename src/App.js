import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';


function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");

  const YOUR_APP_ID = "089343bc";
  const YOUR_APP_KEY = "72f963571578a2bb7ee2218ecf981b09";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1>Tastey Food Corner🍔</h1>
      <form className='searchForm' onSubmit={onSubmit}>
        <input type="text"
          className='enter_input'
          placeholder='Enter ingredient'
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className='submit-bt' type="Submit" value="Search" />

        <select className='app_healthLabels'>
          <option onClick={() => sethealthLabel("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabel("vegetarian")}>Vegetarian</option>
          <option onClick={() => sethealthLabel("paleo")}>Paleo</option>
          <option onClick={() => sethealthLabel("dairy-free")}>Dairy-Free</option>
          <option onClick={() => sethealthLabel("gluten-free")}>Gluten-Free</option>
          <option onClick={() => sethealthLabel("wheat-free")}>Wheat-Free</option>
          <option onClick={() => sethealthLabel("low-sugar")}>Low-Sugar</option>
          <option onClick={() => sethealthLabel("egg-free")}>Egg-Free</option>
          <option onClick={() => sethealthLabel("peanut-free")}>Peanut-Free</option>
          <option onClick={() => sethealthLabel("tree-nut-free")}>Tree-Nut-Free</option>
          <option onClick={() => sethealthLabel("soy-free")}>Soy-Free</option>
          <option onClick={() => sethealthLabel("fish-free")}>Fish-Free</option>
          <option onClick={() => sethealthLabel("shellfish-free")}>Shellfish-Free</option>
        </select>
      </form>

      <div className="app_recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />
        })}
      </div>

    </div>
  );
}

export default App;