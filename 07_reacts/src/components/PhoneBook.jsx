import { useState } from "react";

function PhoneBook() {

    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const [people, setPeople] = useState([]);

    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    }

    function addPerson(e) {
        e.preventDefault();

        setPeople([...people, person]);

        setPerson({
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        });
    }

    return (
        <div className="card">

            <h2>Телефонна книга</h2>

            <form onSubmit={addPerson}>

                <input
                    type="text"
                    name="firstName"
                    placeholder="Ім'я"
                    value={person.firstName}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Прізвище"
                    value={person.lastName}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={person.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Телефон"
                    value={person.phone}
                    onChange={handleChange}
                />

                <button type="submit">Додати</button>

            </form>

            <hr />

            {people.map((item, index) => (
                <div className="person" key={index}>
                    <h3>{item.firstName} {item.lastName}</h3>
                    <p>Email: {item.email}</p>
                    <p>Телефон: {item.phone}</p>
                </div>
            ))}

        </div>
    );
}

export default PhoneBook;