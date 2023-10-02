import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Carousal from './Components/Carousal/Carousal';
import BookCard from './Components/BookCard/BookCard';
import Author from './Components/Author/Author';
import Cart from './Components/Cart/Cart';
import BestSelling from './Components/BestSelling/BestSelling';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousal/>
     <div className="category">
         <ul>
          <a href=""><li>All</li></a>
          <a href=""><li>SciFic</li></a>
          <a href=""><li>Drama</li></a>
          <a href=""><li>Buisness</li></a>
          <a href=""><li>Noval</li></a>
          
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
