import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navbar';
import About from './components/about';
import Shop from './components/shop';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { Row, Column } from 'react-foundation';
import './index.css';



function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/shop' component={Shop} />
      <Route path='/shop/:id' /> 
      </Routes>
    </div>
    </Router>
  );
}

const Home = () => (
<div>
  <h1>Home Page</h1>
</div>
);
export default App;
