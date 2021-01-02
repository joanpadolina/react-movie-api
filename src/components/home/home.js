import React, { useState, useEffect } from 'react'
import './home.css'

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
          <select className="home__select" onChange={(e) => changeQuery(e)} type="select">
            <option value="popular">Popular</option>
            <option value="now_playing">Now playing</option>
            <option value="top_rated">Top rated</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </section>
      </main>
    </div>
  );
}
