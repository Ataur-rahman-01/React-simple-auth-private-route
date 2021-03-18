import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Book from "./components/Book/Book";
import Header from "./components/Header/Header";
import PrivteRoute from "./components/PrivteRoute/PrivteRoute";
export const MyContext = createContext();

function App() {
  const [user, setUser] = useState([]);
  console.log(user);

  return (
    <MyContext.Provider value={[user, setUser]}>
      <p>{user[0]?.displayName}</p>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivteRoute path="/book/:bedType">
            <Book />
          </PrivteRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
