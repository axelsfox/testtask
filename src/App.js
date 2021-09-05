

import './App.css';



function App() {
  return (
    <div className="App">
      <form className="details__form" id="auth" action=" https://localhost/form" method="post">
        <input className="details__name" type="text" placeholder="Фамилия"></input>
        <input className="details__name" type="text" placeholder="Имя"></input>
        <input className="details__name" type="text" placeholder="Отчество"></input>
        <input className="details__userdata" type="text" placeholder="Телефон"></input>
   
        
        <select className="details__select" form="auth" required name="user-country">
        <option disabled selected>Страна</option>
        <option value="Таиланд">Таиланд</option>
        <option value="Индонезия">Индонезия</option>
        <option value="Малайзия">Малайзия</option>
        <option value="Вьетнам">Вьетнам</option></select>
        
   
        <button className="details__submitbutton" type="submit">ОТПРАВИТЬ</button>
        </form>
      </div>
  );
}

export default App;
