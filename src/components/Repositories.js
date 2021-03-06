import * as React from "react";
import RepositorySearchResults from "./RepositorySearchResults";

const Repositories = () => {
  const TIME_OUT = 2000;
  const Q_URL = "https://api.github.com/search/repositories?q=" ;
  const [timer, setTimer] = React.useState(0);
  const [terms, setTerms] = React.useState('');
  const [searchResults, setSearchResults] = React.useState('');
  const [error, setError] = React.useState(null);

  const fetchSearchResults = async () => {
    if (terms.length === 0) {
      return;
    }
    const queryString = makeQueryString();
    try {
      let results = await fetch(`${Q_URL}${queryString}`);
      results = await results.json();
      results = prettifyFetchResults(results.items);
      setSearchResults(results);
    } catch (e) {
      setError('Could not get search results. Try again.');
    }
  };

  const makeQueryString = () => {
    return terms.split(',').reduce((str, curr, idx) => {
      if (idx === 0) {
        str += curr.trim();
      } else {
        str += '+' + curr.trim();
      }
      return str;
    }, '');
  }

  const prettifyFetchResults = (results) => {
    return results.reduce((final, curr) => {
      final.push({
        id: curr.id,
        fullName: curr.full_name,
        description: curr.description,
        stargazersCount: curr.stargazers_count,
        openIssuesCount: curr.open_issues_count,
        matchScore: curr.score,
        issuesUrl: curr.issues_url,
        pullsUrl: curr.pulls_url,
        license: curr.license,
      });

      return final;
    }, []);
  }

  const updateTimer = () => {
    if (terms.length > 0) {
      clearTimeout(timer);
      setTimer(setTimeout(fetchSearchResults, TIME_OUT));
    }
  }

  React.useEffect(() => {
    updateTimer();
    // eslint-disable-next-line
  }, [terms])

  return (
    <div>
      <label htmlFor="search-terms">Search github repositories</label>
      <input
        name="search-terms"
        id="search-terms"
        placeholder="Enter search terms"
        value={terms}
        onChange={({target}) => {
          setTerms(target.value);
        }}
      />
      {error && <p>Error: {error}</p>}
      {searchResults ? (
        <RepositorySearchResults searchResults={searchResults} />
      ) : (
        <div>Enter some text to search github repositories. Use commas to separate key words.</div>
      )}
    </div>
  );
};

export default Repositories;
