import Clock from "./components/Clock";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Clock
        morningColor="#ffd54f"
        dayColor="#4fc3f7"
        nightColor="#212121"
        showDate={true}
        fontFamily="Arial"
        fontSize="50px"
        fontColor="white"
      />
    </div>
  );
}

export default App;