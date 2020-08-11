import React from "react";
import PostList from "./PostList";
import Details from "./Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id" component={Details} />
        <Route path="/">
          <div className="ui container">
            <PostList />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
