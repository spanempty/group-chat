import { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="h-c bg-slate-300 dark:bg-slate-900 dark:text-gray-100 border-b-2 border-black dark:border-gray-100 flex justify-between items-center px-3 m-0">
      <div className="flex gap-5">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? "border-b-2 border-black dark:border-gray-100"
                  : "";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chat"
              className={({ isActive }) => {
                return isActive
                  ? "border-b-2 border-black dark:border-gray-100"
                  : "";
              }}
            >
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/video"
              className={({ isActive }) => {
                return isActive
                  ? "border-b-2 border-black dark:border-gray-100"
                  : "";
              }}
            >
              Video
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex">
        <img
          src={
            auth.currentUser?.photoURL !== null &&
            auth.currentUser?.photoURL !== undefined
              ? auth.currentUser?.photoURL
              : ""
          }
          alt="Profile Picture"
          id="profile-pic"
          className="h-7 w-7 rounded-full ring-2 ring-black dark:ring-white"
          onClick={toggleDropdown}
        />
        {isOpen && (
          <ul className="absolute top-12 right-2">
            <li className="bg-white dark:bg-slate-800 dark:text-gray-200 text-black border-black dark:border-gray-100 border-2 p-2">
              <a href="#">Profile</a>
            </li>
            <li className="bg-white dark:bg-slate-800 dark:text-gray-200 text-black border-black dark:border-gray-100 border-2 p-2">
              <a href="#">Settings</a>
            </li>
            <li className="bg-white dark:bg-slate-800 dark:text-gray-200 text-black border-black dark:border-gray-100 border-2 p-2">
              <button onClick={() => auth.signOut()}>logout</button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
