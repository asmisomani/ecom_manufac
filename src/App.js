import Landing from "./pages/Landing";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./stylesheets/bootstrap_change.css"
import {Route , Switch} from "react-router-dom"; 
import UserGuide from "./pages/UserGuide";
import SetPlan from "./pages/SetPlan"

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
    </div>
  );
}

export default App;
