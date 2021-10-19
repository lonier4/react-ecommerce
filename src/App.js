import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';
import Cart from './views/Cart';
import axios from 'axios';

const App = (props) => {  

  const getClowns = async () => {
    let response = await axios.get('https://clownflaskapi.herokuapp.com/api/clownsnotscary');
    return response.data
  }
  
  const gotClownsData = async () => {
    let data = await getClowns();
    setClowns(data);
  }

  const [clowns, setClowns] = useState(() => gotClownsData());
  

  const [cart, setCart] = useState({
    total: 0,
    size: 0,
    items: {}
  });

return (
  <div className="App">
    <Navbar cart={cart}  />
    <Switch />
      <Route exact path='/' render={() => <Home title={'Clowns -Home'} />} />
      <Route path='/shop' render={() => <Shop title={'Clowns - Shop'} clowns={clowns} cart={cart} setCart={setCart} />} />
      <Route path='/cart' render={() => <Cart title={'Clown Around - Cart'} cart={cart} setCart={setCart} />}  />
    <Switch />
  </div>
);
};

export default App;
