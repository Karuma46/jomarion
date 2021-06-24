import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from "pages/homepage/homepage"
import Menu from "pages/menu"
import MenuDetail from 'pages/menu/menuDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu/:id" component={MenuDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
