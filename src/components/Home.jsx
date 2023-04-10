import React from 'react';
import person from '../assets/person.png';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const Home = () => {
  // job category data
  const data = useLoaderData();
  return (
    <main className="my-container">
      {/* banner section */}
      <section className="flex justify-center space-x-10 relative">
        <div className="w-96">
          <h1 className="text-5xl font-semibold">
            One Step Closer To Your{' '}
            <span className="text-violet-600">Dream Job</span>
          </h1>
          <p className="text-gray-400 my-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="relative bottom-10">
          <img className="w-96" src={person} alt="" />
        </div>
      </section>
      {/* Job Category List section */}
      <section className="my-10">
        <div className="text-center">
          <h3 className="font-bold text-3xl">Job Category List</h3>
          <p className="text-gray-400 my-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          {data.map(category => (
            <Category category={category} key={category.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;