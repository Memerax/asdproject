import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";



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
                <Link to={"/"}>Home</Link>
            </nav>
            <h1>Form To add Recipe</h1>
        </div>
    )
}
function Main() {
    const recipesData = [
        {
            name: "Hamburgers",
            Ingredients: "Meat, Bun",
            Directions: "Cook on the grill",
            Description: "Tasty Hamburger",
            recipe_img: "./logo.svg"
        },
        {
            name: "Hamburgers",
            Ingredients: "Meat, Bun",
            Directions: "Cook on the grill",
            Description: "Tasty Hamburger",
            recipe_img: "./logo.svg"
        }
    ]

    const [recipes, setRecipe] = useState(null)
    useEffect( () => {
        setRecipe(recipesData)
    },[])

    if ( recipes == null) return ;

    return (
        recipesData.map( (recipes, i) => {
            return <h1>{recipes.name}</h1>
        })
    )
}
export function App() {
  return (
    <div>
        <nav>
            <Link to={"/Formpage"}>FormPage</Link>
        </nav>
        <h2>Recipes List</h2>
        <Main/>
    </div>
  );
}

