import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Tech from "../pages/Tech";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/tech">
        <Tech />
      </Route>
      <Route></Route>
    </Switch>
  );
};

export default Routes;
