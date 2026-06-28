import "./App.css";

import City from "./component/city/City";
import Movie from "./component/movie/Movie";
import Pet from "./component/pet/Pet";
import Band from "./component/band/Band";

function App() {
  return (
    <div className="app">

      <City
        city="Рівне"
        country="Україна"
        year="1283"
      />

      <Movie
        name="Форсаж 7"
        director="Джеймс Ван"
        year="2015"
        studio="Universal Pictures"
      />

      <Pet
        name="Джус"
        type="Собака"
        age="17 років"
      />

      <Band
        name="Кіно"
        members={[
          "Віктор Цой",
          "Юрій Каспарян",
          "Ігор Тихомиров",
          "Георгій Гур'янов"
        ]}
        albums={[
          "Группа крови",
          "Ночь",
          "Звезда по имени Солнце"
        ]}
      />

    </div>
  );
}

export default App;