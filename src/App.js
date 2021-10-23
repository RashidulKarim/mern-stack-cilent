import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Update from './components/Update/Update';

function App() {
  return (
    <div className='full'>
      <BrowserRouter>
        <div className='half'>
        <Header></Header>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route path = '/home'>
            <Home></Home>
          </Route>
          <Route path = '/products'>
            <Products></Products>
          </Route>
          <Route path = '/addProduct'>
            <AddProduct></AddProduct>
          </Route>
          <Route path = '/update/:id'>
            <Update></Update>
          </Route>
        </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
