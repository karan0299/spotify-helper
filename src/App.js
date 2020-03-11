import React from 'react';
import Home from "./components/home/Home"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/main.scss'
import Login from "./components/landing/login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
