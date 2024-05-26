import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-3">
        <NavLink to="/">
          <h1 className="flex flex-wrap text-sm font-bold sm:text-xl">
            <span>MERN</span>
            <span>Estate</span>
          </h1>
        </NavLink>
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
          <NavLink to="/">
            <li className="hidden text-slate-700 hover:underline sm:inline">
              Home
            </li>
          </NavLink>

          <NavLink to="/about">
            <li className="hidden text-slate-700 hover:underline sm:inline">
              About
            </li>
          </NavLink>

          <NavLink to="/sign-in">
            <li className=" text-slate-700 hover:underline ">Sign In</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
