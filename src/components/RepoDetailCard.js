import * as React from "react";

const RepoDetailCard = (props) => {
  let details = props.location.state;

  return (
    <div>
      {details?
        <>
          <p>Name: {details.fullName}</p>
          <p>Description: {details.description}</p>
          <p>Stargazers: {details.stargazersCount}</p>
          <p>Open Issues: {details.openIssuesCount}</p>
          <p>Match Score: {details.matchScore}</p>
          <a href={details.issuesUrl}>See Issues</a>
          <a href={details.pullsUrl}>See Pull Requests</a>
          {details.license ? 
            (<p>License: {details.license.name}
              (SPDX ID: {details.spdxId}, <a href={details.license.url}>see details</a>)
            </p>)
            : null
          }
        </>
      : null
      }
    </div>
  );
};

export default RepoDetailCard;
