import { useState } from "react";
import "./UploadForm.css";
import FormInput from "../formInput/FormInput";

function UploadForm() {

    const [form, setForm] = useState({
        nickname: "",
        email: "",
        password: "",
        description: "",
        tags: "",
        photo: null
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {

        const { name, value, files, type } = e.target;

        if (type === "file") {
            setForm({
                ...form,
                photo: files[0]
            });
        }
        else {
            setForm({
                ...form,
                [name]: value
            });
        }
    }

    function validate() {

        let newErrors = {};

        // nickname
        if (!form.nickname.trim()) {
            newErrors.nickname = "Введіть нікнейм";
        }
        else if (form.nickname.length < 5 || form.nickname.length > 16) {
            newErrors.nickname = "Нікнейм має бути 5-16 символів";
        }

        // email
        if (!form.email.trim()) {
            newErrors.email = "Введіть Email";
        }
        else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Невірний Email";
        }

        // password
        if (!form.password) {
            newErrors.password = "Введіть пароль";
        }
        else if (form.password.length < 6 || form.password.length > 32) {
            newErrors.password = "6-32 символи";
        }
        else if (!/(?=.*[a-z])/.test(form.password)) {
            newErrors.password = "Потрібна маленька літера";
        }
        else if (!/(?=.*[A-Z])/.test(form.password)) {
            newErrors.password = "Потрібна велика літера";
        }
        else if (!/(?=.*\d)/.test(form.password)) {
            newErrors.password = "Потрібна цифра";
        }

        // photo
        if (!form.photo) {
            newErrors.photo = "Оберіть фотографію";
        }
        else if (!form.photo.type.startsWith("image")) {
            newErrors.photo = "Лише зображення";
        }

        // description
        if (form.description.length > 200) {
            newErrors.description = "Максимум 200 символів";
        }

        // tags
        if (!form.tags.trim()) {
            newErrors.tags = "Введіть тег";
        }
        else if (!form.tags.startsWith("#")) {
            newErrors.tags = "Тег повинен починатися з #";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {

        e.preventDefault();

        if (validate()) {

            alert("Форма успішно заповнена!");

            console.log(form);

            setForm({
                nickname: "",
                email: "",
                password: "",
                description: "",
                tags: "",
                photo: null
            });

            document.getElementById("photo").value = "";
        }
    }

    return (

        <form className="upload-form" onSubmit={handleSubmit}>

            <FormInput
                label="Нікнейм"
                type="text"
                name="nickname"
                value={form.nickname}
                onChange={handleChange}
                error={errors.nickname}
            />

            <FormInput
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
            />

            <FormInput
                label="Пароль"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
            />

            <div className="form-group">

                <label>Фотографія</label>

                <input
                    id="photo"
                    type="file"
                    onChange={handleChange}
                />

                {errors.photo && (
                    <p className="error">{errors.photo}</p>
                )}

            </div>

            <div className="form-group">

                <label>Опис</label>

                <textarea
                    name="description"
                    rows="5"
                    value={form.description}
                    onChange={handleChange}
                />

                {errors.description && (
                    <p className="error">
                        {errors.description}
                    </p>
                )}

            </div>

            <FormInput
                label="Теги"
                type="text"
                name="tags"
                value={form.tags}
                onChange={handleChange}
                error={errors.tags}
            />

            <button className="btn">
                Завантажити
            </button>

        </form>

    );
}

export default UploadForm;