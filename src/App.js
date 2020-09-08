import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Produtos from './components/Produtos';
import Header from './components/Header';
import Footer from './components/Footer';
import Contato from './components/Contato';
import Produto from './components/Produto';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <div className="content">
            <Switch>
                <Route path="/contato">
                  <Contato/>
                </Route>
                <Route path="/produto/:id">
                  <Produto />
                </Route>
                <Route path="/">
                  <Produtos/>
                </Route>
            </Switch>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
