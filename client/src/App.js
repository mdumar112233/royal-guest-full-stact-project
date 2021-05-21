import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home/Home';
import AllResult from './Components/SearchResult/AllResult/AllResult';
import AllHotelInfo from './Components/SingleHotelInfo/AllHotelInfo/AllHotelInfo';

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
        <Route path='/searchResult'>
          <AllResult/>
        </Route>
        <Route path='/singleHotel/:id'>
          <AllHotelInfo/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
