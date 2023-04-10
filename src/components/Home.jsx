import React from 'react';
import person from '../assets/person.png';

const Home = () => {
  return (
    <main className='my-container'>
        <section className='flex justify-center space-x-10 relative'>
          <div className='w-96'>
            <h1 className='text-5xl font-semibold'>
              One Step Closer To Your <span className='text-violet-600'>Dream Job</span>
            </h1>
            <p className='text-gray-400 my-4'>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className='relative bottom-10'>
            <img className='w-96' src={person} alt="" />
          </div>
      </section>
      
    </main>
  );
};

export default Home;