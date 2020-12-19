import React, { useState, useEffect } from 'react';

export default function Home({ getData = () => {} }) {
  const [query, setQuery] = useState('popular');

  useEffect(() => {
    getData(query);
  }, [query]);

  function changeQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="App">
      <main>
        <section>
          <select onChange={(e) => changeQuery(e)} type="select">
            <option>popular</option>
            <option>now_playing</option>
            <option>top_rated</option>
            <option>upcoming</option>
          </select>
        </section>
      </main>
    </div>
  );
}
