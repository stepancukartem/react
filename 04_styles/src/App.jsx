import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <div className="app">
      <Article
        title="React — сучасна JavaScript бібліотека"
        author="Артем Степанчук"
        text="React — це популярна JavaScript бібліотека для створення користувацьких інтерфейсів. Вона дозволяє будувати швидкі, сучасні та зручні вебзастосунки за допомогою компонентного підходу."
        date="01.07.2026"

        image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"

        fontFamily="Arial"
        fontSize="20px"
        fontColor="#222"

        titleColor="#1565c0"
        authorColor="#666"

        background="#ffffff"

        imagePosition="left"
        titleAlign="center"
      />
    </div>
  );
}

export default App;