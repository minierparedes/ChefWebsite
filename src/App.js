import React from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter  as Router, Switch, Route } from "react-router-dom" 
import './App.css';
import Home from "./Components/pages/Home";
import Products from './Components/pages/Products';
import Services from './Components/pages/Services';
import SignUp from './Components/pages/SignUp';
import Footer from './Components/Footer';
import Recipes from './Components/pages/Recipes';
import RecipeDetails from './Components/pages/RecipeDetails';
import { RecipesContextProvider } from './Context/RecipesContext';

function App() {
  return (
    <RecipesContextProvider>
      <>
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/" exact component={Home}/>
    <Route exact path="/recipes" component={Recipes}/>
    <Route exact path="/recipes/:id" component={RecipeDetails}/>
    <Route exact path="/services" component={Services}/>
    <Route exact path="/products" component={Products}/>
    <Route exact path="/sign-up" component={SignUp}/>
    </Switch>
    </Router>
    </>
    </RecipesContextProvider>
  );
}

export default App;
