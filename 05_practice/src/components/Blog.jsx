function Blog(props) {
    return (
        <div className="card">

            <h2>{props.title}</h2>

            <p>{props.text}</p>

            <h4>Дата: {props.date}</h4>

            <div>
                {props.tags.map((tag, index) => (
                    <span className="tag" key={index}>
                        #{tag}
                    </span>
                ))}
            </div>

        </div>
    );
}

export default Blog;