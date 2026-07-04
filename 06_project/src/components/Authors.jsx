import { useEffect, useState } from "react";

function Authors() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAuthors();
    }, []);

    async function getAuthors() {
        try {
            const response = await fetch("https://frontend53.somee.com/api/authors");
            const data = await response.json();

            setAuthors(data.payload.items);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {authors.map((author) => (
                <div className="card" key={author.id}>

                    <img
                        src={author.image}
                        alt={author.name}
                        className="author-image"
                    />

                    <h2>{author.name}</h2>

                    <p><b>Країна:</b> {author.country}</p>

                    <p><b>Дата народження:</b> {author.birth_date}</p>

                    <p>{author.biography}</p>

                </div>
            ))}
        </div>
    );
}

export default Authors;