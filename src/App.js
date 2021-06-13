import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from "pages/homepage/homepage"
import Recipes from "pages/recipes"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
