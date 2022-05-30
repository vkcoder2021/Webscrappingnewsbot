import React, { Component, createRef } from 'react';
import { fetchNewsHeadlines } from '../utils/newsApi';
import Options from './Options';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.optionRef = createRef();

    this.state = {
      articles: [],
      sources: [],
      next: false,
      options: {
        country: '',
        category: '',
        language: '',
      },
    };
  }

  componentDidMount() {
    let localOptions = JSON.parse(localStorage.getItem('options'));

    if (localOptions?.country) { 
      fetchNewsHeadlines(localOptions).then((articles) =>
        this.setState({ articles }),
      );
    }
  }

  setCountry = (e) => {
    this.setState({
      options: {
        ...this.state.options,
        country: e.target.value,
      },
    });

    e.target.parentNode.classList.add('active-btn');
  };
  setLanguage = (e) => {
    this.setState({
      options: {
        ...this.state.options,
        language: e.target.value,
      },
    });
    e.target.parentNode.classList.add('active-btn');
  };
  setCategory = (e) => {
    this.setState({
      options: {
        ...this.state.options,
        category: e.target.value,
      },
    });
    e.target.parentNode.classList.add('active-btn');
  };

  //will include later on
  // setSource = (e) => {
  //   this.setState({
  //     sources: Array.from(new Set(...this.state.sources, e.target.value)),
  //   });
  // };

  // handleNext = (e) => {
  //   e.preventDefault();
  //   fetchNewsSources(this.state.options).then((sources) =>
  //     this.setState({ sources, next: !this.state.next }),
  //   );
  // };

  handleNext = (e) => {
    e.preventDefault();
    if (
      this.state.options.country &&
      this.state.options.category &&
      this.state.options.language
    ) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
      fetchNewsHeadlines(this.state.options).then((articles) =>
        this.setState({ articles, next: !this.state.next }),
      );
    }

    this.handleOptionRef();
  };

  handleOptionRef = () => {
    // console.log(this.optionRef);
    // this.optionRef.current.style = 'top :0';
    console.log(this.optionRef.current.classList.toggle('active-form'));
  };

  render() {
    return (
      <div className="Dashboard">
        <div className="option-icon">
          <h4 className="title">Headlines</h4>
          <span onClick={this.handleOptionRef}></span>
        </div>
        <Options
          ref={this.optionRef}
          handleOptionRef={this.handleOptionRef}
          setCountry={this.setCountry}
          setCategory={this.setCategory}
          setLanguage={this.setLanguage}
          handleNext={this.handleNext}
        />
        {/* include it later 
        <Sources
          sources={this.state.sources}
          handleSubmit={this.handleSubmit}
        /> 
        */}

        <div className="news_headlines">
          {this.state.articles.map((article) => (
            <div className="article">
              <div className="title">{article.title}</div>

              <div className="content">
                <p className="author">Author : {article.author}</p>
                <p className="publishedAt">
                  published at : {article.publishedAt}
                </p>
                <p className="desc">{article.description}</p>

                <p className="url">
                  <a href={`${article.url}`}>{article.source.name}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
