import { useState, useEffect } from "react";

import { recipes } from "./data/recipes";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RecipeDetail from "./components/RecipeDetail";
import FavouriteButton from "./components/FavouriteButton";


function App() {

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [favourites, setFavourites] = useState(() => {

    const saved = localStorage.getItem("favourites");

    return saved ? JSON.parse(saved) : [];

  });


  useEffect(() => {

    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites)
    );

  }, [favourites]);


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
              ❤️ My Favourites
            </h2>


            {

              favourites.length === 0 ? (

                <p>
                  No favourite recipes saved yet.
                </p>

              )

              :

              (

                favourites.map(recipe => (

                  <div

                    className="recipe-card"

                    key={recipe.id}

                  >

                    {recipe.name}

                  </div>

                ))

              )

            }


          </div>

        )

      }


    </div>

  );

}


export default App;
