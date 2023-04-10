import React from 'react';

const Category = ({ category }) => {
  const { img, title, availableJobs } = category;
  return (
    <div className="bg-violet-700 bg-opacity-10 p-4">
      <img src={img} alt="" />
      <h6 className="font-semibold mt-2">{title}</h6>
      <p className="text-gray-500">{availableJobs}</p>
    </div>
  );
};

export default Category;