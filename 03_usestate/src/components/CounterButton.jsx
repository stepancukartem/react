import PropTypes from "prop-types";

function CounterButton({ text, value, setCount }) {
    return (
        <button
            className="btn"
            onClick={() => setCount(prev => prev + value)}
        >
            {text}
        </button>
    );
}

CounterButton.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired
};

export default CounterButton;