function City(props) {
    return (
        <div className="card">

            <h2>{props.city}</h2>

            <img
                src={props.emblem}
                alt=""
                className="emblem"
            />

            <p><b>Країна:</b> {props.country}</p>

            <p>{props.description}</p>

            <p><b>Населення:</b> {props.population}</p>

            <p><b>Площа:</b> {props.area}</p>

        </div>
    );
}

export default City;
