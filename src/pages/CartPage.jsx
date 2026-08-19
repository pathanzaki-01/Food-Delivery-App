// src/pages/CartPage.jsx
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from '../features/cart/cartSlice';

function CartPage() {
  const { items, restaurantName } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (sum, item) => sum + (item.price || 5) * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="p-6 text-center mt-10">
        <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
        <Link to="/restaurants" className="text-orange-600 font-medium mt-2 inline-block">
          Browse restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold dark:text-gray-800 text-gray-100">Your Cart</h1>
        <button
          onClick={() => dispatch(clearCart())}
          className="text-sm text-red-500 hover:underline"
        >
          Clear Cart
        </button>
      </div>

      <p className="dark:text-gray-500 text-gray-400 mb-4">
        Ordering from: <span className="font-semibold text-orange-600">{restaurantName}</span>
      </p>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border dark:border-gray-700 rounded-lg p-4"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <h2 className="font-semibold dark:text-gray-800 text-gray-100">{item.name}</h2>
                <p className="dark:text-gray-800 text-gray-400 text-sm">
                  ${(item.price || 5).toFixed(2)} each
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="px-3 py-1 bg-orange-400 font-bold rounded hover:bg-orange-600 "
              >
                -
              </button>
              <span className="dark:text-gray-800 text-gray-100">{item.quantity}</span>
              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                className="px-3 py-1 bg-orange-400 font-bold rounded hover:bg-orange-600  "
              >
                +
              </button>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between text-xl font-bold dark:text-gray-800 text-gray-100">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <Link
        to="/checkout"
        className="mt-6 block text-center bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default CartPage;