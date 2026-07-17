import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";

function App() {

    return (
        <AuthProvider>
            <Register />
        </AuthProvider>
    );

}

export default App;