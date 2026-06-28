import "./Band.css";

function Band(props){
    return(
        <div className="card">

            <h1>Улюблений гурт</h1>

            <h2>{props.name}</h2>

            <h3>Учасники</h3>

            <ul>
                {props.members.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>Альбоми</h3>

            <ul>
                {props.albums.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/56/Viktor_Tsoi_1986.jpg"
                alt="Кіно"
            />

        </div>
    );
}

export default Band;