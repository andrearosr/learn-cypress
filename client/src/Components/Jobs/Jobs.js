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
  }, []);

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
      <button type="button" onClick={handleLogout} className="logout-button">
        Log out
      </button>
      {!globalState.jobs.length && <div className="loader" />}
      <div className="Jobs-list">
        {globalState.jobs.map(job => (
          <div className="Jobs-job" key={job.id}>
            <img src={job.company_logo} alt="Company logo" className="Jobs-job-logo" />
            <div className="Jobs-job-info">
              <h3>{job.title}</h3>
              <p>{job.type}</p>
              <p><b>Posted at:</b> {formatDate(job.created_at)}</p>
              <p><b>Location:</b> {job.location}</p>
              <p><b>Company:</b> <a href={job.company_url} target="_blank">{job.company}</a></p>
              <p><a href={job.url} target="_blank">See full job listing</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Jobs };