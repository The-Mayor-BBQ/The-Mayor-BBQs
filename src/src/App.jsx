import { recipes } from "./data/recipes";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App(){

return (

<div className="app">

<Header />

<Navigation />


<h2>
🔥 Recipe Library
</h2>


{
recipes.map(recipe => (

<div className="recipe-card" key={recipe.id}>

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

);

<div>

<h1>
👑 The Mayor BBQs
</h1>

<h2>
Pitmaster Cookbook
</h2>

<p>
Master the fire. Perfect the flavour.
</p>


<h2>
🔥 Recipe Library
</h2>


{
recipes.map(recipe => (

<div className="recipe-card" key={recipe.id}>

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

export default App;
