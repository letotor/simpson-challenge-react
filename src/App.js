import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Card from './components/Card';



const  App = ()=> {

  return (
    <div className="App">
      <section className="section">
        {/* <h1 className="title">Les Citations Aléatoires des simpsons</h1> */}
        <div className="app__title-img">
          <img className="img-responsive center-block" src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2Fsimpsons.PNG?1497481539770"></img>
        </div>
        
        <div className="container" >
          <Card className ="card" id="simpson"/>
          </div>
      </section>
      </div>
  );
}

export default App;
