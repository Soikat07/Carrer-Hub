import React, { useContext, useEffect, useState } from 'react';
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
  const [cart, setCart] = useState(newJobCart);
  
  const remoteCartHandler = () => {
      const remote = newJobCart.filter(mj => mj.work_model === 'Remote');
      setCart(remote);
  }
  const onsiteCartHandler = () => {
    const onsite = newJobCart.filter(mj => mj.work_model === 'Onsite')
    setCart(onsite);
  }
  return (
    <main className="my-container">
      <div className="flex justify-center gap-2">
        <button onClick={remoteCartHandler} className="btn-outline">Remote</button>
        <button onClick={onsiteCartHandler} className="btn-outline">Onsite</button>
      </div>
      <div className="w-3/5 mx-auto">
        {cart.map(singleJob => (
          <JobsCart singleJob={singleJob} key={singleJob.id} />
        ))}
      </div>
    </main>
  );
};

export default AppliedJobs;