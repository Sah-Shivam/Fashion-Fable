import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
// import {Switch, Route} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import { Route, Routes, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Products from './component/Products';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <>
       <Navbar/>
      <Routes>
        {/* <Switch> */}
        <Route exact path ="/" Component={Home} />
        <Route exact path ="/products" Component={Products} />
        <Route exact path ="/About" Component={About} />
        <Route exact path ="/Contact" Component={Contact} />
        {/* </Switch> */}
       </Routes> 
    </>
  );
}

export default App;
