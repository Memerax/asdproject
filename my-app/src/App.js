import './App.css';
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import {RecipeList} from "./Recipe";
import { useRef} from "react";
//import the Json file to an array
// import recipesData from "./recipes.json";
import axios from "axios";



export function Formpage() {
    const nameInput = useRef();
    const ingredientsInput = useRef();
    const directionsInput = useRef();
    const descriptionInput = useRef();
    const recipe_imgInput = useRef();

    const submit = (e) => {
        e.preventDefault();
        const name = nameInput.current.value;
        const ingredients = ingredientsInput.current.value;
        const directions = directionsInput.current.value;
        const description = descriptionInput.current.value;
        const recipe_img = recipe_imgInput.current.value;

        const newRecipe = {
            name: name,
            Ingredients: ingredients,
            Directions: directions,
            Description: description,
            recipe_img: recipe_img
        }
        // recipesData.push(newRecipe)
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
                    <div>
                        <select ref={recipe_imgInput}>
                            <option value="./images/fruit.jpg">Fruit </option>
                            <option value="./images/vegetables.jpg">Vegetable</option>
                            <option value="./images/meat.jpg">Meat</option>
                        </select>
                    </div>
                    <br/>
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}
function Main(props) {

    const [recipes, setRecipe] = useState(null)
    useEffect(() => {
        const load = async () => {
            const response = await axios.get('/api/recipes/Hamburgers')
            console.log("Arrayouput")
            console.log(response.data)
            setRecipe(response.data)
        }
        load()

    }, [])
    console.log("test")
    if (recipes == null) return;

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