function Counter({ click }) {
    return (
        <button className="btn" onClick={click}>
            +1
        </button>
    );
}

export default Counter;