import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';

const App = (props) => {
  const [snakes, setSnakes] = useState(['ball python', 'anaconda', 'viper', 'rattlesnake']);  

  
return (
  <div className="App">
    <Navbar />
    <Switch />
      <Route exact path='/' render={() => <Home title={'Snakes -Home'} snakes={snakes} setSnakes={setSnakes} />} />
      <Route exact path='/shop' render={() => <Shop title={'Snakes - Shop'} />} />
    <Switch />
  </div>
);
};

export default App;
