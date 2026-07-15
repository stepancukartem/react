import { MemoryRouter, Routes, Route } from "react-router";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import "./App.css";

function App() {

    return (

        <MemoryRouter initialEntries={["/"]}>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/profile"
                    element={<Profile />}
                />

            </Routes>

        </MemoryRouter>

    );

}

export default App;