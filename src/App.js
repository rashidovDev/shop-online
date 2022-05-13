import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./components/Product"
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from './components/Cart';
import Checkout from "./components/Checkout";
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <>
   <Header />
   <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/products' component={Product}/>
     <Route exact path='/products/:id' component={ProductDetail}/>
     <Route exact path='/cart' component={Cart} />
     <Route exact path='/checkout' component={Checkout} />
     <Route exact path='/about' component={About}/>
     <Route exact path='/contact' component={Contact}/>
   </Switch>

   <Footer />
   </>
  );
}

export default App;