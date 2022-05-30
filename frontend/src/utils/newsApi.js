const API_KEY = '8f698c65eaa74178be54adf15ffabe64';

const fetchNewsHeadlines = async ({ country, category }, sources) => {
  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  let res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`,
    requestOptions,
  );

  let data = await res.json();

  console.log(data)

  return data.articles;
};

const fetchNewsSources = async ({ country, category, language }) => {
  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  let res = await fetch(
    `https://newsapi.org/v2/top-headlines/sources?country=${country}&category=${category}&language=${language}&apiKey=${API_KEY}`,
    requestOptions,
  );

  let data = await res.json();

  return data.sources;
};

export { fetchNewsHeadlines, fetchNewsSources };
