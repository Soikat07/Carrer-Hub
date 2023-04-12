import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-5 lg:px-16 md:px-24">
      <div className="flex justify-between items-center relative">
        <h1 className="font-bold text-2xl tracking-wide">
          Simply<span className='text-purple-600'>Hired</span>
        </h1>
        {/* conditional rendering */}
        <div onClick={() => setOpen(!open)} className="lg:hidden">
          <span>
            {open === true ? (
              <XMarkIcon className="h-6 w-6 text-purple-500" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-purple-500" />
            )}
          </span>
        </div>
        {/*  */}
        <ul
          className={`justify-around space-x-4 flex lg:flex absolute lg:static duration-500 ${
            open ? 'top-14 left-8' : '-top-36'
          }`}
        >
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'default')}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'default')}
              to="/statistics"
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'default')}
              to="/appliedJobs"
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'default')}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <button className="btn-primary">Start Applying</button>
      </div>
    </nav>
  );
};

export default Header;  