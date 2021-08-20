import Landing from "./pages/Landing";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./stylesheets/bootstrap_change.css"
import {Route , Switch} from "react-router-dom"; 
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <div>
      <Switch>
      <Landing/>
      <Route path ="/getstarted">
        <GetStarted/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
