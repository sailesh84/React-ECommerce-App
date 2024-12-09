import { React, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Buy from './components/Buy';
import Cart from './components/Cart';

function App() {

  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    //Item id already added in cart or not
    const isAlreadyAdded = cartItem.findIndex(function (elem) {
      return elem.id === item.id;
    });

    //If requested item already added in cart
    if (isAlreadyAdded !== -1) {
      toast('already added in cart', {
        type: 'error'
      });
      return;
    }

    //If requested item not added in cart, then add item on cart
    setCartItem([...cartItem, item]);
  };


  //If purchase completed, then clear the cart
  const buyNow = () => {
    setCartItem([]);
    toast('Purchase Complete', {
      type: 'success',
    });
  };

  //It removes single item from the cart
  const removeItem = (item) => {
    setCartItem(cartItem.filter((e) => e.id !== item.id));
  };



  return (
    // <div className="App">
    //   <Buy addInCart={addInCart} />
    // </div>

    <div className="container-fluid">
      <ToastContainer />
      <div className="row">
        <div className="col-md-8">
          <Buy addInCart={addInCart} />
        </div>
        <div className="col-md-4">
          <Cart cartItem={cartItem} buyNow={buyNow} removeItem={removeItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
