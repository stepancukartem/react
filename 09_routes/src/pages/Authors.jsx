import { useEffect, useState } from "react";
import { Link } from "react-router";
import AuthorCard from "../components/AuthorCard";

function Authors() {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAuthors();
    }, []);

    async function getAuthors() {

        try {

            const response = await fetch(
                "https://frontend53.somee.com/api/authors"
            );

            const data = await response.json();

            setAuthors(data.payload.items);

        }
        catch (error) {

            console.log(error);

        }

    }

    return (

        <div className="container">

            <div className="header">

                <h1>Автори</h1>

                <Link className="btn" to="/add-author">
                    Додати автора
                </Link>

            </div>

           <div className="cards">

    {authors.map(author => (
        <AuthorCard
            key={author.id}
            author={author}
        />
             ))}

                 
            

            </div>

        </div>

    );

}

export default Authors;