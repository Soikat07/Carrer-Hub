import React from 'react';
import { Link } from 'react-router-dom';

const JobsCart = ({ singleJob }) => {
  const {id, img, company_name, job_title, working_time ,work_model,location,salary} = singleJob;
  
  return (
    <>
      <section className="flex border  border-gray-300 p-5 mt-5 ">
        <div className="w-28 p-2 bg-slate-100">
          <img src={img} alt="" />
        </div>
        <div className='flex justify-between'>
          <div>
            <h3>{job_title}</h3>
            <h5>{company_name}</h5>

            <div>
              <button className="btn-outline">{working_time}</button>
              <button className="btn-outline">{work_model}</button>
            </div>

            <div>
              <p>{location}</p>
              <p>{salary}</p>
            </div>
          </div>
            <Link to={`/${id}`}>
              <button className="btn-primary">View Details</button>
            </Link>
          </div>
      </section>
    </>
  );
};

export default JobsCart;