// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-[#FAF3E8] dark:bg-gray-950">
      <section className="px-6 pt-16 pb-12 text-center max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.2em] font-bold text-[#D85A30] mb-3">
          TONIGHT'S ORDER, DECIDED IN SECONDS
        </p>
        <h1 className="font-['Anton'] text-5xl sm:text-6xl leading-[0.95] text-[#1C1B1A] dark:text-gray-100 tracking-tight">
          HUNGRY?
          <br />
          <span className="text-[#FF5A2B]">GOOD.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#5A5852] dark:text-gray-400 max-w-md mx-auto mt-4 mb-8">
          Real kitchens, real menus, one restaurant per order — so nothing shows up
          half cold from two different places.
        </p>
        <Link
          to="/restaurants"
          className="inline-block bg-[#1C1B1A] dark:bg-orange-600 text-[#FAF3E8] font-bold text-sm px-8 py-3 rounded-full hover:opacity-90 transition"
        >
          Browse restaurants
        </Link>
      </section>
    </div>
  );
}

export default HomePage;