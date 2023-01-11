// React imports
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// Asset imports
import { Logo } from '../assets/'

const activeClassName =
  "relative before:content-['*'] before:-top-4 before:left-1/2 before:-ml-1 before:absolute before:text-amber-400"

function Footer() {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-[180px_1fr_180px] border-black border-2 bg-white">
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

      <div className="col-span-2  text-sm md:row-start-1 md:col-start-2 md:col-end-3 border-t-2 border-black md:border-t-0 flex justify-center items-center p-4 text-center">
        &copy; 2023 Meerkat Development • Built with ReactJS & TailwindCSS •
        Hosted on Netlify
      </div>
    </footer>
  )
}

export default Footer
