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
import HouseReview from './Components/Booking/HouseReview/HouseReview';
import SelfInfo from './Components/Booking/SelfInfo/SelfInfo';
import Payment from './Components/Booking/Payment/Payment';
import CheckPayment from './Components/Booking/CheckPayment/CheckPayment';
import CreateAccount from './Components/UserSignUPAndSignIn/LoginUser/CreateAccount';
import Login from './Components/UserSignUPAndSignIn/LoginUser/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
        <PrivateRoute path='/singleHotel/:id'>
          <AllHotelInfo/>
        </PrivateRoute>
        <Route path='/booking/:id'>
          <HouseReview/>
        </Route>
        <Route path='/selfInfo/:id'>
          <SelfInfo/>
        </Route>
        <Route path='/payment/:id'>
          <Payment/>
        </Route>
        <Route path='/checkPayment/:id'>
          <CheckPayment/>
        </Route>
        <Route path='/createAccount'>
          <CreateAccount/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
