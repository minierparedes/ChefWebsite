import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from "./Components/pages/Home";
import Products from './Components/pages/Products';
import Services from './Components/pages/Services';
import SignUp from './Components/pages/SignUp';
import Recipes from './Components/pages/Recipes';
import RecipeDetails from './Components/pages/RecipeDetails';
import { RecipesContextProvider } from './Context/RecipesContext';
import Login from './Components/Admin/Login';
import Register from './Components/Admin/Register';
import Dashboard from './Components/Admin/Dashboard';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = bool => {
    setIsAuthenticated(bool);
  }

  return (
    <RecipesContextProvider>
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/recipes/:id" component={RecipeDetails} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/login" render={props => !isAuthenticated ? (<Login{...props} setAuth={setAuth} /> ): (<Redirect to="/dashboard"/>)} />
            <Route exact path="/register" render={props => !isAuthenticated ? <Register{...props} setAuth={setAuth} /> : <Redirect to="/login"/>} />
            <Route exact path="/dashboard" render={props => isAuthenticated ? <Dashboard{...props} setAuth={setAuth} /> : <Redirect to="/login"/>} />
          </Switch>
        </Router>
      </>
    </RecipesContextProvider>
  );
}

export default App;
