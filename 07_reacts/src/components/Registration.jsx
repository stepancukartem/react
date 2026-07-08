import { useState } from "react";

function Registration() {
    const [user, setUser] = useState({
        nickname: "",
        email: "",
        gender: "Чоловік",
        age: ""
    });

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        alert(`
Нікнейм: ${user.nickname}
Email: ${user.email}
Стать: ${user.gender}
Вік: ${user.age}
        `);
    }

    return (
        <div className="card">
            <h2>Реєстрація</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="nickname"
                    placeholder="Нікнейм"
                    value={user.nickname}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                />

                <select
                    name="gender"
                    value={user.gender}
                    onChange={handleChange}
                >
                    <option>Чоловік</option>
                    <option>Жінка</option>
                </select>

                <input
                    type="number"
                    name="age"
                    placeholder="Вік"
                    value={user.age}
                    onChange={handleChange}
                />

                <button>Зареєструватися</button>

            </form>

        </div>
    );
}

export default Registration;