import React, { createContext } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

export const JobsContext = createContext([]);

const App = () => {
  const jobs = useLoaderData()
  
  return (
    <JobsContext.Provider value={jobs}>
      <Header />
      <Outlet />
    </JobsContext.Provider>
  );
};

export default App;