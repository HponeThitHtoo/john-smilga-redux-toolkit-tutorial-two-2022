import { loadCart } from "./cartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://course-api.com/react-useReducer-cart-project`
      );

      if (!response.ok) {
        throw new Error("Could no fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(loadCart({ items: cartData }));
    } catch (error) {
      console.log(error);
    }
  };
};
