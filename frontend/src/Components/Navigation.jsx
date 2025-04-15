import { Link } from "react-router-dom";

function Navigation(){
    return(
        <>
        <nav className="bg-amber-300 flex justify-around items-center min-h-12 font-normal">
            <h2>Quotes App</h2> <br />
            <Link to="/all">Home  </Link>
            <Link to="/add">New</Link>
        </nav>
        </>
    )
}

export default Navigation;