import "./Movie.css";

function Movie(props){
    return(
        <div className="card">
            <h1>Улюблений фільм</h1>

            <h2>{props.name}</h2>

            <p>Режисер: {props.director}</p>
            <p>Рік випуску: {props.year}</p>
            <p>Кіностудія: {props.studio}</p>

            <img
                src="https://upload.wikimedia.org/wikipedia/en/b/b8/Furious_7_poster.jpg"
                alt="Форсаж 7"
            />
        </div>
    );
}

export default Movie;