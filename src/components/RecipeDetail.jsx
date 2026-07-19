function RecipeDetail({recipe}) {

return (

<div className="recipe-detail">

<h2>
{recipe.name}
</h2>

<h3>
{recipe.category}
</h3>

<p>
{recipe.description}
</p>


<h3>
🧂 Ingredients
</h3>

<ul>

{recipe.ingredients.map((item,index)=>(

<li key={index}>
{item}
</li>

))}

</ul>


<h3>
🔥 Method
</h3>

<ol>

{recipe.method.map((step,index)=>(

<li key={index}>
{step}
</li>

))}

</ol>


</div>

);

}

export default RecipeDetail;
