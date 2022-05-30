const expressNewsHeadlines = async () => {
  let res = await fetch('http://localhost:4000/getArticles');

  let data = await res.json();

  return data;
};

const expressNewsContent = async (url) => {
  let res = await fetch('http://localhost:4000/getArticleContent', {
    method: 'POST',
    body: JSON.stringify({
      url,
    }),
    headers: { 'Content-type': 'application/json' },
  });

  let data = await res.json();

  return data;
};

export { expressNewsHeadlines, expressNewsContent };
