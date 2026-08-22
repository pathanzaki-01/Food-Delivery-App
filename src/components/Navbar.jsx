import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { clearCart } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const { user, logout } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    dispatch(clearCart());
    toast.info('Logged out successfully');
    navigate('/');
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      
      <Link
        to="/"
        className="font-bold text-3xl text-orange-700"
      >
        FoodExpress
      </Link>

      <div className="flex justify-between gap-6">

        <Link
          to="/"
          className="text-gray-600 dark:text-gray-300 hover:text-orange-700"
        >
          Home
        </Link>

        <Link
          to="/restaurants"
          className="text-gray-600 dark:text-gray-300 hover:text-orange-700"
        >
          Restaurants
        </Link>

        <Link
          to="/cartpage"
          className="text-gray-600 dark:text-gray-300 hover:text-orange-700"
        >
          🛒 {totalQuantity}
        </Link>

        {user ? (
          <div className="flex items-center gap-3">

            <span className="text-gray-600 dark:text-gray-300">
              Hi, {user.firstName}
            </span>

            <button
              onClick={handleLogout}
              className="text-sm bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>

          </div>
        ) : (
          <Link
            to="/login"
            className="text-sm bg-orange-600 text-white px-3 py-1.5 rounded-lg hover:bg-orange-700"
          >
            Login
          </Link>
        )}

      </div>
    </nav>
  );
}

export default Navbar;