import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Carousal from './Components/Carousal/Carousal';
import BookCard from './Components/BookCard/BookCard';
import Author from './Components/Author/Author';
import Cart from './Components/Cart/Cart';
import BestSelling from './Components/BestSelling/BestSelling';
import SearchBar from './Components/SearchBar/SearchBar';
import All from './Components/Category/All';
import Buisness from './Components/Category/Buisness';
import Fiction from './Components/Category/Fiction';
import Motivational from './Components/Category/Motivational';
import Mystery from './Components/Category/Mystery';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";


function App() {

  return (
    <div className="App">
     
     <Navbar/>
     <Carousal/>
     <div className="category">
         <ul>
          <Link to="/"><li>All</li></Link>
          <Link to="/fiction"><li>Fiction</li></Link>
          <Link to="/mystery"><li>Mystery</li></Link>
          <Link to="/buisness"><li>Buisness</li></Link>
          <Link to="/motivational"><li>Motivational</li></Link>
          
         </ul>
     </div>
     <SearchBar/>
      <div className="card-container">
          <Routes>
                <Route path='/' element={<All/>}/>
                <Route path='/fiction' element={<Fiction/>}/>
                <Route path='/mystery' element={<Mystery/>}/>
                <Route path='/buisness' element={<Buisness/>}/>
                <Route path='/motivational' element={<Motivational/>}/>
                <Route path='/cart' element={<Cart/>}/>
                
          </Routes>
      </div>



     <BestSelling/>
     <div className="author-container">
          <Author/>
          <Author/>
          <Author/>
          <Author/>
     </div>

     <Footer/>
     
    </div>
  );
}

export default App;
