import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import HomePage from './Components/HomePage';
import Cart from './Components/Cart/Cart';
import ProductPage from './Components/ProductPage/ProductPage';
import AddProduct from './Components/AddProduct/AddProduct';
import OrderForm from './OrderForm/OrderForm';
import OrderSummary from './OrderSummary/OrderSummary';
import SuccessPage from './Success';


function App() {

  return (
    <div className="App">
      <Routes>
          <Route path='*' element={<HomePage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/productpage' element={<ProductPage/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/orderform' element={<OrderForm/>}/>
          <Route path='/ordersummary' element={<OrderSummary/>}/>
          <Route path='/success' element={<SuccessPage/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
