// src/pages/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../services/authService';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userData = await loginUser({ username, password });
      login(userData);
      toast.success(`Welcome back, ${userData.firstName}!`);
      navigate('/');
    } catch (error) {
      toast.error('Invalid username or password');
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-16 p-6 border dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Test account — username: <b>emilys</b>, password: <b>emilyspass</b>
      </p>
    </div>
  );
}

export default LoginPage;