import "./Pet.css";

function Pet(props){
    return(
        <div className="card">
            <h1>Домашній улюбленець</h1>

            <h2>{props.name}</h2>

            <p>Тип: {props.type}</p>
            <p>Вік: {props.age}</p>

            <img
                src="https://images.dog.ceo/breeds/husky/n02110185_1469.jpg"
                alt="Джус"
            />
        </div>
    );
}

export default Pet;