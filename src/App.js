import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filters/AllCategories';
import logoImg from './logo.jpg'

function App() {
  return (
    <div className='App'>
      <div className='block-one'>
        <div>
           <img src = {logoImg} width = '250px' alt = 'Logo'/>
        </div>
        <div>
          <AllCategories/>
        </div>
      </div>
      <div className='block-two'>
        <div>
          <Cart/>
        </div>
        <div>
          <Dishes/>
        </div>
      </div>
    </div>
  );
}

export default App;
