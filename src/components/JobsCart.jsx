import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

const JobsCart = ({ singleJob }) => {
  const {id, img, company_name, job_title, working_time ,work_model,location,salary} = singleJob;
  
  return (
    <>
      <section className="flex justify-start border gap-2 border-gray-300 p-5 mt-5 ">
        <div className="flex justify-center items-center bg-slate-100 px-5">
            <img className="w-36" src={img} alt="" />
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <h3 className="text-gray-600 font-semibold">{job_title}</h3>
            <h5 className="text-gray-600">{company_name}</h5>

            <div className="my-2 space-x-2">
              <button className="btn-outline">{working_time}</button>
              <button className="btn-outline">{work_model}</button>
            </div>
            <div className="flex space-x-3">
              <span className="flex items-center">
                <MapPinIcon className="h-4 w-4 text-gray-500" />
                <p className="text-gray-500">{location}</p>
              </span>
              <span className="flex items-center">
                <CurrencyDollarIcon className="h-4 w-4 text-gray-500" />
                <p className="text-gray-500">{salary}</p>
              </span>
            </div>
          </div>
          <div className='mx-6'>
            <Link to={`/${id}`}>
              <button className="btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsCart;