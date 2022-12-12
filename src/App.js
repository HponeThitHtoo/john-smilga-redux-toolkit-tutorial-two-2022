import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { fetchCartData } from "./features/cart/cartActions";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  /* useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]); */

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
