
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 mt-20">
      <h1 className="text-6xl font-bold text-orange-600">404</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">
        This page isn't on the menu.
      </p>
      <Link
        to="/"
        className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;