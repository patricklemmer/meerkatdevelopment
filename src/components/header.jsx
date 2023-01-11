import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../assets/'

const activeClassName = 'text-[#D9AE73]'

function Header() {
  return (
    <header className="grid grid-cols-2 md:grid-cols-[180px_1fr_180px] border-black border-2 bg-white">
      <Link
        to="/"
        className="flex align-middle justify-center border-black border-r-2"
      >
        <img src={Logo} alt="Meerkat Development Logo" width="80" height="80" />
      </Link>
      <Link
        to="/contact"
        className="md:col-start-3 border-black border-l-2 flex gap-2 items-center justify-center text-lg bg-amber-400 hover:bg-amber-500 ease-in-out duration-75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
        Get in Touch!
      </Link>

      <nav className="col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 border-t-2 border-black md:border-t-0 flex justify-center items-center">
        <ul className="flex gap-6 max-w-sm overflow-auto snap-always p-4 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
