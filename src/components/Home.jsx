import React, { useContext, useState } from 'react';
import person from '../assets/person.png';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import Job from './Job';
import { JobsContext } from '../App';

const Home = () => {
  // job category data
  const data = useLoaderData();
  // get jobs with useContext
  const jobs = useContext(JobsContext || []);
  // show all button function
  const [seeAll, setSeeAll] = useState(false);
  const handleSeeAllJobs = () => {
    setSeeAll(true);
  }
  
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
      {/* Featured Jobs */}
      <section className="mt-20">
        <div className="text-center">
          <h3 className="font-bold text-3xl">Featured Jobs</h3>
          <p className="text-gray-400 my-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="my-4 grid md:grid-cols-2 gap-5 mx-20">
          {jobs.slice(0,seeAll ? 6 : 4).map(job => (
            <Job job={job} key={job.id} />
          ))}
        </div>
      </section>
      {/* conditionally rendered see all button */}
      {seeAll || (
        <div onClick={handleSeeAllJobs} className="text-center">
          <button className="btn-primary">See All Jobs</button>
        </div>
      )}
    </main>
  );
};
export default Home;