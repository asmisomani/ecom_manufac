import Landing from "./pages/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/bootstrap_change.css";
import "./stylesheets/material-ui.css";
import "./stylesheets/modals.css"
import { Route, Switch } from "react-router-dom";
import UserGuide from "./pages/UserGuide";
import SetPlan from "./pages/SetPlan";
import Navbar from "./pages/Navbar";
import Orders from "./pages/Orders";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Landing />
        <Route path="/userguide">
          <UserGuide />
        </Route>
        <Route path="/setplan">
          <SetPlan />
        </Route>
        <Switch>
          <Route path="/orders">
            <Navbar />
            <Orders />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
