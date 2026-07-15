import { useEffect, useState } from "react";

function Profile() {

    const [message, setMessage] = useState("");

    useEffect(() => {

        validate();

    }, []);

    async function validate() {

        const token = localStorage.getItem("token");

        if (!token) {

            setMessage("Ви не авторизовані");

            return;

        }

        try {

            const response = await fetch(
                "https://frontend53.somee.com/api/auth/validate",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(token)
                }
            );

            const data = await response.text();

            setMessage(data);

        }
        catch (error) {

            console.log(error);

            setMessage("Помилка сервера");

        }

    }

    return (

        <div className="container">

            <div className="profileCard">

                <h1>Профіль</h1>

                <h2>{message}</h2>

            </div>

        </div>

    );

}

export default Profile;