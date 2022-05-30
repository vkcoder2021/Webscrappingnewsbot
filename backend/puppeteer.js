const puppeteer = require('puppeteer');
const { v4: uuidv4 } = require('uuid');

const getArticles = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto(url);

    //evaluate
    const data = await page.$$eval(
      '#MainPage_latest_news_text > ul > li > a',
      (links) => {
        return links.map((link) => ({
          title: link.textContent,
          ref: link.href,

          //uuid doesnt work here inside evaluate
          // id: uuidv4(),
        }));
      },
    );

    //page.goto url doesnt work

    // const articles = [];
    // data.forEach(async (element) => {
    //   await page.goto(element.ref);

    //   const contents = await page.$$eval(
    //     '#mw-content-text > div.mw-parser-output > p',
    //     (items) => {
    //       //get content content
    //       return items.map((item) => item.textContent.trim());
    //     },
    //   );

    //   articles.push({
    //     title: element.title,
    //     ref: element.ref,
    //     contents,
    //   });
    // });

    await browser.close();
    // return articles;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getArticleContent = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto(url);

    const data = await page.$$eval(
      '#mw-content-text > div.mw-parser-output > p',
      (contents) => {
        //get content data
        return contents.map((content) => content.textContent.trim());
      },
    );

    await browser.close();
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getArticles, getArticleContent };