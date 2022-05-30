const express = require('express');
const cors = require('cors');
const { getArticles, getArticleContent } = require('./puppeteer');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//start server
app.get('/getArticles', (req, res, next) => {
  getArticles('https://en.wikinews.org/wiki/Main_Page').then((data) =>
    res.send(data),
  );
});
app.post('/getArticleContent', (req, res) => {
  let { url } = req.body;
  console.log(url);
  getArticleContent(url).then((data) => res.send(data));


});

app.listen(4000, () => console.log('the server is running at port 4000'));