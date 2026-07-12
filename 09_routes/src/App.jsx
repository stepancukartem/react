import { MemoryRouter, Routes, Route } from "react-router";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Authors from "./pages/Authors";
import AddAuthor from "./pages/AddAuthor";

import "./App.css";

function App() {
    return (
        <MemoryRouter initialEntries={["/"]}>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/authors" element={<Authors />} />
                <Route path="/add-author" element={<AddAuthor />} />
            </Routes>
        </MemoryRouter>
    );
}

export default App;