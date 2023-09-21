
import './App.css';
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import {RecipeList} from "./Recipe";
import { useRef} from "react";


const recipesData = [
    {
        name: "Hamburgers",
        Ingredients: "Meat, Bun",
        Directions: "Cook on the grill",
        Description: "Tasty Hamburger",
        recipe_img: "./images/hamburger.jpg",
        visible: true
    },
    {
        name: "Chicken Sandwich",
        Ingredients: "Chicken, Lettuce, Bacon, Mayo",
        Directions: "Chop up the chicken, fry the bacon and add the mayo",
        Description: "Chicken sandwich with bacon",
        recipe_img: "./images/Chicken.jpg",
        visible: true
    }
]
 export function Formpage() {
     const nameInput = useRef();
     const ingredientsInput = useRef();
     const directionsInput = useRef();
     const descriptionInput = useRef();
     const recipe_img = useRef();

     const submit = (e) => {
         e.preventDefault();
         const name = nameInput.current.value;
         const ingredients = ingredientsInput.current.value;
         const directions = directionsInput.current.value;
         const description = descriptionInput.current.value;

         const newRecipe = {
             name: name,
             Ingredients: ingredients,
             Directions: directions,
             Description: description,
             recipe_img: "./images/hamburger.jpg"
         }
         console.log(newRecipe)
         recipesData.push(newRecipe)
     };
    return (
        <div>
            <nav>
                <Link to={"/Formpage"}> FormPage </Link>
                <br/>
                <Link to={"/"}> Home </Link>
            </nav>
            <h1>Form To add Recipe</h1>
            <div>
                <form onSubmit={submit}>
                    <label>Name  </label>
                    <input
                        ref={nameInput}
                        type="text"
                        placeholder=""
                    />
                    <br/>
                    <label>Ingredients  </label>
                    <input
                        ref={ingredientsInput}
                        type="text"
                        placeholder=""
                    />
                    <br/>
                    <label>Directions</label>
                    <input
                        ref={directionsInput}
                        type="text"
                        placeholder=""
                    />
                    <br/>
                    <label>Description </label>
                    <input
                        ref={descriptionInput}
                        type="text"
                        placeholder=""
                    />
                    <br/>
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}
function Main(props) {


    const [recipes, setRecipe] = useState(null)
    useEffect( () => {
        setRecipe(recipesData)
    },[])

    if ( recipes == null) return ;

    return (
        <RecipeList data={recipes}/>
    )
}
export function App() {
  return (
    <div>
        <nav>
            <Link to={"/Formpage"}> FormPage </Link>
            <br/>
            <Link to={"/"}> Home </Link>
        </nav>
        <h2>Recipes List</h2>
        <Main/>
    </div>
  );
}

