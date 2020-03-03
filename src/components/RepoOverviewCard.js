import * as React from "react";
import { Link } from "react-router-dom";

const RepoOverviewCard = ({details}) => {
  return (
    <Link to={{
      pathname:`repositories/${details.id}`,
      state: details,
    }}>
      <div>
        <p>Name: {details.fullName}</p>
        <p>Description: {details.description}</p>
        <p>Stargazers: {details.stargazersCount}</p>
        <p>Open Issues: {details.openIssuesCount}</p>
        <p>Match Score: {details.matchScore}</p>
      </div>
    </Link>
  );
};

export default RepoOverviewCard;
