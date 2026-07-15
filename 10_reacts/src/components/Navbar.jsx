import { Link } from "react-router";

function Navbar() {

    return (

        <nav className="navbar">

            <h2>📚 Book App</h2>

            <div className="menu">

                <Link to="/">
                    Головна
                </Link>

                <Link to="/register">
                    Реєстрація
                </Link>

                <Link to="/profile">
                    Профіль
                </Link>

            </div>

        </nav>

    );

}

export default Navbar;