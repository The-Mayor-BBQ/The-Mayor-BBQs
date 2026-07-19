import { useState } from "react";

import { recipes } from "./data/recipes";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RecipeDetail from "./components/RecipeDetail";
import FavouriteButton from "./components/FavouriteButton";


function App(){

const [selectedRecipe, setSelectedRecipe] = useState(null);

const const [favourites, setFavourites] = useState(() => {

const saved = localStorage.getItem("favourites");

return saved ? JSON.parse(saved) : [];

});


return (

<div className="app">

<Header />

<Navigation />


{

selectedRecipe ? (

<div>

<button
onClick={() => setSelectedRecipe(null)}
>
⬅ Back
</button>


<RecipeDetail 
recipe={selectedRecipe}
/>


<FavouriteButton

recipe={selectedRecipe}

favourites={favourites}

setFavourites={setFavourites}

/>


</div>

)


:


(

<div>


<h2>
🔥 Recipe Library
</h2>


{

recipes.map(recipe => (

<div

className="recipe-card"

key={recipe.id}

>


<h3
onClick={() => setSelectedRecipe(recipe)}
>

{recipe.name}

</h3>


<p>
{recipe.category}
</p>


<p>
{recipe.description}
</p>


<FavouriteButton

recipe={recipe}

favourites={favourites}

setFavourites={setFavourites}

/>


</div>

))

}


<h2>
❤️ Favourites
</h2>


{

favourites.map(recipe => (

<p key={recipe.id}>
{recipe.name}
</p>

))

}


</div>

)

}


</div>

);

}


export default App;
