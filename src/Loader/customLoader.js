const getJobsData = async () => {
  const jobsData = await fetch('featured.json');
  const jobs = await jobsData.json();

  return jobs;
}
export { getJobsData };