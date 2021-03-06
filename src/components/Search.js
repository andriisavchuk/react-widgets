import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchValue, setSearchValue] = useState('java');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);
  const [searchResult, setSearchedResult] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 700);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchValue]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedSearchValue,
        },
      });

      setSearchedResult(data.query.search);
    };

    search();
  }, [debouncedSearchValue]);

  // useEffect(() => {
  //   if (searchValue && !searchResult.length) {
  //     search();
  //   } else {
  //     const timeoutId = setTimeout(() => {
  //       if (searchValue) {
  //         search();
  //       }
  //     }, 700);
  //
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  //
  //   // (async () => {
  //   //   await axios.get('url')
  //   // })();
  //
  //   // axios.get('url').then(response => {
  //   //   console.log(response)
  //   // })
  // }, [searchValue, searchResult.length]);

  const renderedResults = searchResult.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="search">Enter Value for Search</label>
          <input
            type="text"
            id="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
