import { useState } from "react";
import { recipes } from "./data/recipes";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RecipeDetail from "./components/RecipeDetail";


function App(){

const [selectedRecipe, setSelectedRecipe] = useState(null);


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
⬅ Back to Recipes
</button>


<RecipeDetail recipe={selectedRecipe}/>

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

onClick={() => setSelectedRecipe(recipe)}

>


<h3>
{recipe.name}
</h3>


<p>
{recipe.category}
</p>


<p>
{recipe.description}
</p>


</div>

))

}

</div>

)

}


</div>

);

}


export default App;
