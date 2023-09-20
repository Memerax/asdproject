import logo from './logo.svg';
import './App.css';

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

function Formpage() {
    return (
        <div>
            <h1>Contact</h1>
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
function App() {
  return (
    <div>
        <h2>Recipes List</h2>
        <Main/>
    </div>
  );
}

export default App;
