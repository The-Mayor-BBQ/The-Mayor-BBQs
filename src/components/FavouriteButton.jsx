function FavouriteButton({recipe, favourites, setFavourites}) {

const saved = favourites.some(
(item) => item.id === recipe.id
);


function toggleFavourite(){

if(saved){

setFavourites(
favourites.filter(
(item)=>item.id !== recipe.id
)
);

}

else{

setFavourites([
...favourites,
recipe
]);

}

}


return (

<button onClick={toggleFavourite}>

{saved ? "❤️ Saved" : "🤍 Favourite"}

</button>

);

}

export default FavouriteButton;
