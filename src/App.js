import React from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Menu from "./components/pages/Menu";
import Clients from "./components/pages/Clients";
import Prices from "./components/pages/Prices";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div>
        <Navbar />   
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/menu/" component={Menu} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/client" component={Clients} />
          <Route exact path="/price" component={Prices} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
