function AuthorCard({ author }) {

    return (

        <div className="card">

            <img
                src={author.image}
                alt={author.name}
            />

            <h2>{author.name}</h2>

            <p>
                <b>Країна:</b> {author.country}
            </p>

            <p>
                <b>Дата народження:</b> {author.birthDate}
            </p>

            <p>{author.biography}</p>

        </div>

    );

}

export default AuthorCard;