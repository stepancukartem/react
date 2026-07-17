import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    async function register(data) {

        const response = await fetch(
            "https://frontend53.somee.com/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        if (!response.ok) {
            alert("Помилка реєстрації");
            return;
        }

        setUser(data);

        alert("Успішна реєстрація");
    }

    return (
        <AuthContext.Provider value={{ user, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}