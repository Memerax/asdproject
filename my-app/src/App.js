import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import {RecipeList} from "./Recipe";



function Home() {
    return (
    <div>
        <h1>My website</h1>
    </div>
    )}

 export function Formpage() {
    return (
        <div>
            <nav>
                <Link to={"/Formpage"}> FormPage </Link>
                <br/>
                <Link to={"/"}> Home </Link>
            </nav>
            <h1>Form To add Recipe</h1>
        </div>
    )
}
function Main(props) {
    const recipesData = [
        {
            name: "Hamburgers",
            Ingredients: "Meat, Bun",
            Directions: "Cook on the grill",
            Description: "Tasty Hamburger",
            recipe_img: "./images/hamburger.jpg"
        },
        {
            name: "Chicken Sandwich",
            Ingredients: "Chicken, Lettuce, Bacon, Mayo",
            Directions: "Chop up the chicken, fry the bacon and add the mayo",
            Description: "Chicken sandwich with bacon",
            recipe_img: "./images/Chicken.jpg"
        }
    ]

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

