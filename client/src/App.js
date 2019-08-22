import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./component/Homepage";
import Profile from "./component/Profile";


function App() {
  return ( <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/profile" component={Profile} />
    </Switch>

    

  </Router>    
  );
}

export default App;
