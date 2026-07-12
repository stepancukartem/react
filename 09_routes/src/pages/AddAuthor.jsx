import { useState } from "react";
import { useNavigate } from "react-router";

function AddAuthor() {

    const navigate = useNavigate();

    const [author, setAuthor] = useState({
        name: "",
        image: "",
        country: "",
        biography: "",
        birthDate: ""
    });

    function handleChange(e) {

        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            const response = await fetch(
                "https://frontend53.somee.com/api/authors",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(author)
                }
            );

            if (response.ok) {

                alert("Автора успішно додано!");

                navigate("/authors");

            }
            else {

                alert("Помилка при додаванні");

            }

        }
        catch(error){

            console.log(error);

        }

    }

    return (

        <div className="container">

            <h1>Додати автора</h1>

            <form
                className="authorForm"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Ім'я"
                    value={author.name}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Посилання на фото"
                    value={author.image}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="country"
                    placeholder="Країна"
                    value={author.country}
                    onChange={handleChange}
                />

                <textarea
                    rows="6"
                    name="biography"
                    placeholder="Біографія"
                    value={author.biography}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="birthDate"
                    value={author.birthDate}
                    onChange={handleChange}
                />

                <button>
                    Додати автора
                </button>

            </form>

        </div>

    );

}

export default AddAuthor;