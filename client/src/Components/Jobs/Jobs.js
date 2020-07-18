import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../../store/context';
import "./Jobs.css";

function Jobs() {
  const { globalState, globalDispatch } = useContext(Context);

  useEffect(() => {
    function fetchJobs() {
      fetch('http://localhost:9000/jobs')
        .then(response => response.json())
        .then(data => {
          globalDispatch({ type: 'FETCH_JOBS_SUCCESS', payload: data });
        });
    }
    fetchJobs();
  }, [globalDispatch]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const dayOfMonth = date.getDate();
    const month = date.getMonth();
    const year = date.getYear();

    return `${dayOfMonth} / ${month} / ${year}`;
  }

  function handleLogout() {
    globalDispatch({ type: 'LOGOUT' });
  }

  if (!globalState.loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Jobs">
      <h1 data-test="jobs-title">Jobs</h1>
      <button type="button" onClick={handleLogout} className="logout-button" data-test="logout-button">
        Log out
      </button>
      {!globalState.jobs.length && <div className="loader" />}
      <div className="Jobs-list">
        {globalState.jobs.map(job => (
          <div className="Jobs-job" data-test="job-item" key={job.id}>
            <img src={job.company_logo} alt="Company logo" className="Jobs-job-logo" data-test="job-item-logo" />
            <div className="Jobs-job-info">
              <h3 data-test="job-item-title">
                {job.title}
              </h3>
              <p data-test="job-item-type">
                {job.type}
              </p>
              <p data-test="job-item-date">
                <b>Posted at:</b> {formatDate(job.created_at)}
              </p>
              <p data-test="job-item-location">
                <b>Location:</b> {job.location}
              </p>
              <p data-test="job-item-company">
                <b>Company:</b><a href={job.company_url} target="_blank" rel="noopener noreferrer">{job.company}</a>
              </p>
              <p data-test="job-item-url">
                <a href={job.url} target="_blank" rel="noopener noreferrer">See full job listing</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Jobs };