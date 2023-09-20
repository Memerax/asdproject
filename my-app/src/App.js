import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

const recipesData = [ {
    name: "Hamburgers",
    Ingredients: "Meat, Bun",
    Directions: "Cook on the grill",
    Description: "Tasty Hamburger",
    recipe_img: "./logo.svg"
}]

const recipestest = [
    "Hamburgers",
     "Meat, Bun",
    "Cook on the grill",
    "Tasty Hamburger",
    "./logo.svg"
]
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
    return (
        <section>
            <ul>
                {recipestest.map((recipe) => <li>{recipe}</li>)}
            </ul>
        </section>
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

