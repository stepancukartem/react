import "./City.css";

function City(props){
    return(
        <div className="card">
            <h1>Моє місто</h1>

            <h2>{props.city}</h2>

            <p>Країна: {props.country}</p>
            <p>Рік заснування: {props.year}</p>

            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Rivne_Theatre_Square.jpg"
                alt="Рівне"
            />
        </div>
    );
}

export default City;