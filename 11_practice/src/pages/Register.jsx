import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Register() {

    const { register } = useAuth();

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

    function handleSubmit(e) {

        e.preventDefault();

        register(user);

    }

    return (

        <div className="container">

            <h1>Реєстрація</h1>

            <form onSubmit={handleSubmit}>

                <input name="username" placeholder="Username" onChange={handleChange} />

                <input name="email" type="email" placeholder="Email" onChange={handleChange} />

                <input name="password" type="password" placeholder="Password" onChange={handleChange} />

                <input name="firstName" placeholder="First Name" onChange={handleChange} />

                <input name="lastName" placeholder="Last Name" onChange={handleChange} />

                <input name="image" placeholder="Image URL" onChange={handleChange} />

                <button>Register</button>

            </form>

        </div>

    );

}

export default Register;