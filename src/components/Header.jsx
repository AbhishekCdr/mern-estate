import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-3">
        <Link to="/">
          <h1 className="flex flex-wrap text-sm font-bold sm:text-xl">
            <span>MERN</span>
            <span>Estate</span>
          </h1>
        </Link>
        <form className="flex items-center rounded-lg bg-slate-100 p-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="w-24 bg-transparent focus:outline-none sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden text-slate-700 hover:underline sm:inline">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden text-slate-700 hover:underline sm:inline">
              About
            </li>
          </Link>

          <Link to="/sign-in">
            <li className=" text-slate-700 hover:underline ">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
