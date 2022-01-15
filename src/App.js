import React, {useState, useEffect} from 'react';
import './App.css';
import './index.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Header from './Header';
import Menu from './Menu'
//import HeaderBlock from  "./HeaderBlock"
import Login from './Login';
import {useSelector, useDispatch} from "react-redux"
import { login, logout, selectUser } from './features/userSlice';
import Signup from './Signup';
import TeslaAccount from './TeslaAccount';
import { auth } from './firebase';
import Home from './Home'

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch()
  
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        })
        )}
        else{
          dispatch(logout())
        }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
              <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
              {isMenuOpen && <Menu />}
              <Home/>
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="/teslaaccount"/> : <Login/>}
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/teslaaccount">
          {!user ? (
            <Redirect to="/login"/> 
            ) : (
              <>
                 <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                  />
                  {isMenuOpen && <Menu />}
              </>
            )} 
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
