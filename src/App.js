import Landing from "./pages/Landing";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./stylesheets/bootstrap_change.css";
import "./stylesheets/material-ui.css"
import {Route , Switch} from "react-router-dom"; 
import UserGuide from "./pages/UserGuide";
import SetPlan from "./pages/SetPlan"
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <Landing/>
      <Route path="/userguide">
        <UserGuide/>
      </Route>
      <Route path="/setplan">
        <SetPlan/>
      </Route>
      <Switch>
        <Route path="/home">
          <Navbar/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
