import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-10 md:px-24'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-xl tracking-wide'>SimplyHired</h1>
        <ul className='flex justify-around space-x-4'>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}
            to='/'>Home</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}
            to='/statistics'>Statistics</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}
            to='/appliedJobs'>Applied Jobs</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}
            to='/blog'>Blog</NavLink></li>
        </ul>
        <button className='btn-primary'>Start Applying</button>
      </div>
    </nav>
  );
};

export default Header;  