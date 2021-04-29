import { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import OrderListAdmin from './Components/Admin/OrderListAdmin/OrderListAdmin';
import AddServiceAdmin from './Components/Admin/AddServiceAdmin/AddServiceAdmin';
import NotFound from './Components/NotFound/NotFound';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import OrderNow from './Components/Users/OrderNow/OrderNow';
import UserReview from './Components/Users/UserReview/UserReview';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import HomePage from './Components/Home/HomePage/HomePage';
import DeleteServices from './Components/Admin/DeleteServices/DeleteServices';
import MyOrderList from './Components/Users/MyOrderList/MyOrderList';



export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/user/orderNow/:id">
            <OrderNow></OrderNow>
          </PrivateRoute>
          <PrivateRoute path="/user/orderNow">
            <OrderNow></OrderNow>
          </PrivateRoute>
          <PrivateRoute path="/user/myOrderList">
            <MyOrderList></MyOrderList>
          </PrivateRoute>
          <PrivateRoute path="/user/review">  
            <UserReview></UserReview>
          </PrivateRoute>
          <PrivateRoute path="/admin/orderList">
            <OrderListAdmin></OrderListAdmin>
          </PrivateRoute>
          <Route path="/admin/addService">
            <AddServiceAdmin></AddServiceAdmin>
          </Route>
          <Route path="/admin/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <PrivateRoute path="/admin/deleteService">
            <DeleteServices></DeleteServices>
          </PrivateRoute>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
