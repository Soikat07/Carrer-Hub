import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { JobsContext } from '../App';
import { MapPinIcon, CurrencyDollarIcon, PhoneIcon,EnvelopeIcon,BriefcaseIcon } from '@heroicons/react/24/solid';

const JobDetails = () => {
  // get clicked job id
  const { jobId } = useParams();
  // get all jobs data
  const jobs = useContext(JobsContext || []);
  const matchedJob = jobs.find(mj => mj.id === jobId);
  const {
    id,
    job_description,
    job_responsibility,
    educational_requirements,
    job_title,
    salary,
    experience,
    phone,
    email,
    address,
  } = matchedJob;
  return (
    <main className="grid md:grid-cols-2 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-40 md:py-24 space-x-40">
      <div>
        <p>
          <span className="font-semibold">Job Description:</span>
          <br />
          <span className="text-gray-500">{job_description}</span>
        </p>
        <p className="my-3">
          <span className="font-semibold">Job Responsibility:</span>
          <br />
          <span className="text-gray-500">{job_responsibility}</span>
        </p>
        <p>
          <span className="font-semibold">Educational Requirements:</span>
          <br />
          <span className="text-gray-500">{educational_requirements}</span>
        </p>
        <p>
          <span className="font-semibold">Experiences:</span>
          <br />
          <span className="text-gray-500">{experience}</span>
        </p>
      </div>
      {/* Right div */}
      <div className="">
        <div className="bg-violet-500 bg-opacity-10 p-7">
          <div className="mb-4 space-y-2">
            <h3 className="font-bold mb-2">Job Details</h3>
            <p className="flex items-center">
              <CurrencyDollarIcon className="h-4 w-4 text-violet-500" />
              <span className="font-semibold">Salary:</span>
              <span className="text-gray-500"> {salary}</span>
            </p>
            <p className="flex items-center">
              <BriefcaseIcon className="h-4 w-4 text-violet-500" />
              <span className="font-semibold">Job Title:</span>
              <span className="text-gray-500"> {job_title}</span>
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold mb-3">Contact Information</h3>
            <p className="flex items-center">
              <PhoneIcon className="h-4 w-4 text-violet-500" />
              <span className="font-semibold">Phone:</span>
              <span className="text-gray-500"> {phone}</span>
            </p>
            <p className="flex items-center">
              <EnvelopeIcon className="h-4 w-4 text-violet-500" />
              <span className="font-semibold">Email:</span>
              <span className="text-gray-500"> {email}</span>
            </p>
            <p className="flex items-center">
              <MapPinIcon className="h-4 w-4 text-violet-500" />
              <span className="font-semibold">Address:</span>
              <span className="text-gray-500"> {address}</span>
            </p>
          </div>
        </div>
        <div className="text-center mt-4 bg-violet-500 py-2 text-white rounded-md">
          <Link to="">
            <button>Apply Now</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default JobDetails;