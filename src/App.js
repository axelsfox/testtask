import './App.css';

function App() {
  return (
    <div className="App">
        <input class="details__userdata" name="details" type="text" placeholder="Фамилия"></input>
        <input class="details__userdata" name="details" type="text" placeholder="Имя"></input>
        <input class="details__userdata" name="details" type="text" placeholder="Отчество"></input>
        <input class="details__userdata" name="details" type="text" placeholder="Телефон"></input>
        <input class="details__userdata" name="details" type="password" placeholder="Password"></input>
        <button class="details__submitbutton" type="submit" name="details">JOIN NOW </button>
      </div>
  );
}

export default App;
