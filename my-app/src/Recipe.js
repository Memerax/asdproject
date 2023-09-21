import {useEffect, useState} from "react";


export function RecipeList(props) {

    return (
        props.data.map((recipe, i) => {
            return <Recipe name={recipe.name}
                           ingredients = {recipe.Ingredients}
                           directions = {recipe.Directions}
                           description = {recipe.Description}
                           recipe_img = {recipe.recipe_img}
                           id = {i}
                           visible ={true}
            />
        })
    )
}

function Recipe(props) {
    const [visible, setVisible] = useState(props.visible);

    if (visible) {
        return (

            <div>
                <h3>{props.name}</h3>
                <p>Ingredients: {props.ingredients}</p>
                <p>Directions: {props.directions}</p>
                <p>Description: {props.description}</p>
                <p>{props.id}</p>
                <img height={"200"}
                     src={props.recipe_img}
                />
                <br/>
                <button onClick={() => setVisible(false)}>Remove Recipe</button>
            </div>
        )
    }

}