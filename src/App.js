import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import NewProduct from './components/NewProduct'
import { Switch,  Route } from "react-router-dom";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import {useSelector} from "react-redux"



function App() {

  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/new-product/:id" component={NewProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Home />
      </Switch>
    </div>
  );
}

export default App;
