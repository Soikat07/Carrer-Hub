import React, { useContext } from 'react';
import { JobsContext } from '../App';
import { getJobsCart } from '../utilities/fakeDb';
import JobsCart from './JobsCart';

const AppliedJobs = () => {
  const jobs = useContext(JobsContext || []);
  const storedJob = getJobsCart();
  const newJobCart = [];
  
  for (const id in storedJob) {
    const foundJob = jobs.find(fj => fj.id === id);
    newJobCart.push(foundJob);
  }
  
  return (
    <main className="my-container">
      <div className="flex justify-center gap-2">
        <button className="btn-outline">Remote</button>
        <button className="btn-outline">Onsite</button>
      </div>
      <div className="w-3/5 mx-auto">
        {newJobCart.map(singleJob => (
          <JobsCart singleJob={singleJob} key={singleJob.id} />
        ))}
      </div>
    </main>
  );
};

export default AppliedJobs;