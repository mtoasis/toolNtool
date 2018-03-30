import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import startPage from "./pages/startPage";
import findTool from "./pages/findTool";
import findAll from "./pages/findAll";
import postTool from "./pages/postTool";
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";

const App = () => (
  <div>
  <Router>
    <div> 
      <Switch>
        <Route exact path="/" component={startPage} />
        <Route exact path="/findAll" component={findAll} />
        <Route exact path="/findTool" component={findTool} />
        <Route exact path="/findTool/:id" component={Detail} />
        <Route exact path="/postTool" component={postTool} />
        <Route component={NoMatch} />
      </Switch>   
    </div>
  </Router>
  </div>
);

export default App;
