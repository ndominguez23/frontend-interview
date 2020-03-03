import * as React from "react";
import RepoOverviewCard from './RepoOverviewCard';

const RepositorySearchResults = ({searchResults}) => {
  return (
    <div>
      {searchResults.map((item) => 
        <RepoOverviewCard
          details={item}
          key={item.id}
          id={item.id}
        />
      )}
    </div>
  );
};

export default RepositorySearchResults;
