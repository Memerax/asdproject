import {Link} from "react-router-dom";

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