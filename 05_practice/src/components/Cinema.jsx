function Cinema(props) {
    return (
        <div className="card">

            <h2>{props.title}</h2>

            <img
                src={props.poster}
                alt=""
                className="poster"
            />

            <p>{props.description}</p>

            <h3>Сеанси</h3>

            <ul>
                {props.sessions.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
    );
}

export default Cinema;
