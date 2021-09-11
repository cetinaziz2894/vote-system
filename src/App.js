import "./App.css";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AddPage from "./pages/AddPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div className="app">
        <Router>
            <Switch>
              <Route exact  path="/">
                <ListPage />
              </Route>
              <Route path="/add">
                <AddPage />
              </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
