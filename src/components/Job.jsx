import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
const Job = ({job}) => {
  const {id, img, company_name, job_title, working_time, work_model,location,salary} = job;
  return (
    <div className="border p-4">
      <img className="w-28 mt-3" src={img} alt="" />
      <h5 className="font-bold text-gray-500 my-2">{job_title}</h5>
      <p className="text-gray-500">{company_name}</p>
      <div className="inline-flex space-x-2 my-2">
        <button className="btn-outline">{working_time}</button>
        <button className="btn-outline">{work_model}</button>
      </div>
      <div className="flex space-x-5 my-2 text-gray-500">
        <p className="inline-flex gap-2">
          <span>
            <MapPinIcon className="h-6 w-6 text-gray-500" />
          </span>
          {location}
        </p>
        <p className="inline-flex gap-2">
          <CurrencyDollarIcon className="h-6 w-6 text-gray-500" /> {salary}
        </p>
      </div>
      <Link to={ `/${id}`}>
        <button className="btn-primary my-1">View Details</button>
      </Link>
    </div>
  );
};

export default Job;