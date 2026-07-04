import "./App.css";
import Cinema from "./components/Cinema";
import Blog from "./components/Blog";
import City from "./components/City";

function App() {
  return (
    <div className="container">

      <Cinema
        title="Форсаж 10"
        description="Домінік Торетто та його команда знову рятують світ і зустрічаються з новим ворогом."
        poster="https://upload.wikimedia.org/wikipedia/en/0/0c/Fast_X_poster.jpg"
        sessions={["10:00", "13:00", "16:30", "20:00"]}
      />

      <Blog
        title="React Hooks"
        text="Hooks дозволяють використовувати стан і можливості React без написання класів."
        date="02.07.2026"
        tags={["React", "JavaScript", "Hooks"]}
      />

      <City
        country="Україна"
        city="Рівне"
        description="Рівне — обласний центр України, відомий своєю історією та затишною атмосферою."
        emblem="https://upload.wikimedia.org/wikipedia/commons/0/08/Coat_of_Arms_of_Rivne.svg"
        population="245 000"
        area="63 км²"
      />

    </div>
  );
}

export default App;