import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="bg-stone-400 text-white text-lg font-bold h-14 w-screen flex flex-nowrap ">
      <nav className=" pl-8 w-4/6 h-full border-solid border-r-black border-r flex items-center flex-auto flex-nowrap">
        <ul className="w-full flex flex-auto flex-nowrap items-center">
          <li className="h-full w-1/3 flex items-center justify-center">
            <NavLink
              to="/"
              className="hover:text-violet-600 duration-300"
              activeStyle="text-black"
            >
              Strona główna
            </NavLink>
          </li>
          <li className="h-full  w-1/3 flex items-center justify-center">
            <NavLink
              to="/AddReport"
              className="hover:text-violet-600 duration-300"
            >
              Dodaj raport
            </NavLink>
          </li>
          <li className="h-full  w-1/3 flex items-center justify-center">
            <NavLink
              to="/Events"
              className="hover:text-violet-600 duration-100 hover:border-b-violet-500 hover:border-b-2 hover:border-b-solid duration-300"
            >
              Wydarzenia
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="hover:text-violet-600  cursor-pointer h-full pr-8 w-2/6 border-solid border-l-black border-l flex justify-end items-center">
        logowanie
      </div>
    </div>
  );
}

export default Header;
