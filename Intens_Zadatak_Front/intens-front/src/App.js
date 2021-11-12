import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import CandidatesPage from "./Pages/CandidatesPage";
import SkillsPage from "./Pages/SkillsPage";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/skills">
              <SkillsPage />
            </Route>
            <Route path="/">
              <CandidatesPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
