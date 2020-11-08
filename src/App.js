import React from "react";
import {Route,Link} from "react-router-dom";
import Home from "./components/Home";


const App = () => {
  return (
    <div>
      <nav>
      <h1>Lambda Eats</h1>
      <div>
        <Link to = "/">Home</Link>
        <Link>Help</Link>
        </div>
    </nav>
    <Route path ="/" component={Home} />
    </div>
  );
};
export default App;
