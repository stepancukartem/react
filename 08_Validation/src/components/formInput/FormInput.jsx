import "./FormInput.css";

function FormInput({
    label,
    type,
    name,
    value,
    onChange,
    error,
    placeholder
}) {

    return (
        <div className="form-group">

            <label>{label}</label>

            <input
                type={type}
                name={name}
                value={type === "file" ? undefined : value}
                onChange={onChange}
                placeholder={placeholder}
            />

            {error && (
                <p className="error">
                    {error}
                </p>
            )}

        </div>
    );
}

export default FormInput;