function Article(props) {
  return (
    <div
      style={{
        background: props.background,
        width: "900px",
        margin: "40px auto",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 0 15px gray",
        display: "flex",
        flexDirection:
          props.imagePosition === "right" ? "row-reverse" : "row",
        gap: "25px",
        alignItems: "center"
      }}
    >
      <img
        src={props.image}
        alt=""
        style={{
          width: "220px",
          height: "220px",
          objectFit: "contain"
        }}
      />

      <div style={{ flex: 1 }}>
        <h1
          style={{
            textAlign: props.titleAlign,
            color: props.titleColor,
            fontFamily: props.fontFamily,
            fontSize: "36px"
          }}
        >
          {props.title}
        </h1>

        <h3
          style={{
            color: props.authorColor,
            fontFamily: props.fontFamily
          }}
        >
          Автор: {props.author}
        </h3>

        <p
          style={{
            fontFamily: props.fontFamily,
            fontSize: props.fontSize,
            color: props.fontColor,
            lineHeight: "1.7"
          }}
        >
          {props.text}
        </p>

        <h4 style={{ color: "#888" }}>
          Дата: {props.date}
        </h4>
      </div>
    </div>
  );
}

export default Article;