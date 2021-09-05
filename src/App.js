import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
   state = {
    SurName: '', 
    FirstName: '', 
    FvrName: '',
    Phone: '',
    Country: '',
  };
  
  textValid(text){ 
  const nameVal = /[^\sa-zа-яё]/gi;
   return nameVal.test(text)
  }
  phoneValid(phone){
    const phoneVal = /[sa-zа-яё]/; 
    return phoneVal.test(phone)
  }

  validate = () => {
    const { SurName, FirstName, Phone } = this.state;
    if (SurName.trim() && FirstName.trim() && Phone.trim()){
    return true
  }
  return false
  }

  handleChg = (e) => {
    const {id, value} = e.currentTarget;
    if (this.textValid(e.currentTarget.value) === true){
      this.setState({[id] : 'Допустимы только буквы'}) 
    }
    else{
    this.setState({[id]: e.currentTarget.value})  
    } 
  };
 
  handlePhoneChg = (e) => {
    if(this.phoneValid(e.currentTarget.value) === true){
      this.setState({Phone: 'Только цифры'})
    }
    else {
    this.setState({Phone: e.currentTarget.value})
    }
  };


  handleSubmit(){
    axios.post(' https://localhost/form', JSON.stringify(this.state))
    .catch (error => {
      console.log('There was an error!', error);
    })
  }

  


render(){
  const {SurName, FirstName, FvrName, Phone, Country} = this.state
  return (
    <div className="App">
      <form className="details__form" id="auth" >
        <input className="details__name" id='SurName' value={SurName} onChange={this.handleChg} type="text" placeholder="Фамилия"></input>
        <input className="details__name" id='FirstName' value={FirstName} onChange={this.handleChg} type="text" placeholder="Имя"></input>
        <input className="details__name" id='FvrName' value={FvrName} onChange={this.handleChg} type="text" placeholder="Отчество"></input>
        <input className="details__userdata" value={Phone} onChange={this.handlePhoneChg} type="text" placeholder="Телефон"></input>
   
        
        <select className="details__select" id="Country" value={Country} onChange={this.handleChg} form="auth" required name="user-country">
        <option selected>Страна</option>
        <option value="Таиланд">Таиланд</option>
        <option value="Индонезия">Индонезия</option>
        <option value="Малайзия">Малайзия</option>
        <option value="Вьетнам">Вьетнам</option></select>
        
   
        <button className="details__submitbutton" disabled={!this.validate()} onSubmit={this.handleSubmit} type="submit">ОТПРАВИТЬ</button>
        </form>
      </div>
  );
}
}

export default App;
