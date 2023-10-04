import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Carousal from './Components/Carousal/Carousal';
import BookCard from './Components/BookCard/BookCard';
import Author from './Components/Author/Author';
import Cart from './Components/Cart/Cart';
import BestSelling from './Components/BestSelling/BestSelling';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";


function App() {

  return (
    <div className="App">
     <Navbar/>
     <Carousal/>
     <div className="category">
         <ul>
          <a href=""><li>All</li></a>
          <a href=""><li>Fiction</li></a>
          <a href=""><li>Mystery</li></a>
          <a href=""><li>Buisness</li></a>
          <a href=""><li>Motivational</li></a>
          
         </ul>
     </div>
      <div class="card-container">
           <BookCard/>
           <BookCard/>
           <BookCard/>
           <BookCard/>
           <BookCard/>
           <BookCard/>
           <BookCard/>
           <BookCard/>
           <BookCard/>
      </div>
     <BestSelling/>
     <div class="author-container">
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
