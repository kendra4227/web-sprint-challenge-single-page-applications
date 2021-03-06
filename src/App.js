import React from "react";
import {Route,Link} from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import Order from "./components/Order";


const App = () => {
  return (
    <div className="App">
      <nav className="header">
      <h1 className="logo">Lambda Eats</h1>
      <div className = "links">
        <Link clasName="home" to = "/"><button>Home</button></Link>
        <Link to ="/"><button>Help</button></Link>
        </div>
    </nav>
   
    <Route exact path ="/" component={Home} />
    <Route path="/pizza" component ={PizzaForm}/>
    <Route path="/order" component = {Order} />
    </div>
  );
};
export default App;
