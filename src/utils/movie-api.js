async function ApiCall(callQuery) {
  var config = {
    method: "GET",
    redirect: "follow",
  };
  const query = "movie/" + callQuery;
  const url =
    process.env.REACT_APP_API_URL +
    `${query}?api_key=${process.env.REACT_APP_ACCESS_TOKEN}&language=en&page=1&region=nl`;
  const fetchApi = await fetch(url, config);
  const response = await fetchApi.json();
  return response.results;
}

async function SearchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_ACCESS_TOKEN}&language=en-US&query=${query}&page=1&include_adult=false`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data
  } catch (err) {
    console.error(err);
  }
}

export { ApiCall, SearchMovies };
