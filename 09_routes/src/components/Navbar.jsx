import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="navbar">

            <h2>📚 Library</h2>

            <div className="menu">

                <Link to="/">Головна</Link>

                <Link to="/authors">Автори</Link>

                <Link to="/add-author">Додати автора</Link>

            </div>

        </nav>
    );
}

export default Navbar;