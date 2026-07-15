import { useState } from "react";
import { useNavigate } from "react-router";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        image: ""
    });

    function handleChange(e) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

const registerResponse = await fetch(
    "https://frontend53.somee.com/api/auth/register",
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)
    }
);

// ← СЮДИ ВСТАВ ЦЕ

if (!registerResponse.ok) {

    const error = await registerResponse.text();

    alert(error);

    return;

}

// Далі вже Login

const loginResponse = await fetch(
    "https://frontend53.somee.com/api/auth/login",
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email: user.email,
            password: user.password
        })
    }
);

            if (!loginResponse.ok) {

                alert("Помилка входу");

                return;

            }

           const token = await loginResponse.text();

localStorage.setItem("token", token);

            alert("Успішна реєстрація!");

            navigate("/profile");

        }
        catch (error) {

            console.log(error);

            alert("Помилка сервера");

        }

    }

    return (

        <div className="container">

            <h1>Реєстрація</h1>

            <form
                className="registerForm"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={user.firstName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={user.lastName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={user.image}
                    onChange={handleChange}
                    required
                />

                <button>

                    Зареєструватися

                </button>

            </form>

        </div>

    );

}

export default Register;