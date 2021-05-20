import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
