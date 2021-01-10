import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../src/views/About/About';
import Collection from '../src/views/Collection/Collection';
import ItemDetail from '../src/views/ItemDetail/ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact/>
          <Route path="/about" exact component={About}/>
          <Route path="/collection" exact component={Collection}/>
          <Route path="/collection/:itemId" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
