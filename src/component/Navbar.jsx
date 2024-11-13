// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../component/ThemeSwitcher";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { username } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/pokemon">Pokemon</Link></li>
          <li><ThemeSwitcher /></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><Link to="/link1">Link 1</Link></li>
                <li><Link to="/link2">Link 2</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {username && (
        <div className="flex-none">
          <span className="text-gray-700 font-bold mx-4">{username}</span>
        </div>
      )}
    </div>
  );
}