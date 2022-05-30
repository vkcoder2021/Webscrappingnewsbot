import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { expressNewsHeadlines } from '../utils/expressApi';

export default class WikiHeadlines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
    };
  }

  componentDidMount() {
    expressNewsHeadlines().then((headlines) => this.setState({ headlines }));
  }
  render() {
    return (
      <div className="WikiHeadlines Dashboard">
        <div className="WikiHeadlines-container">
          <h3>Headlines</h3>
          {this.state.headlines.map((entry) => (
            <div className="headline">
              <NavLink
                to={`/headlineContent?title=${entry.title}&ref=${entry.ref}`}
                className="title"
              >
                {entry.title}
              </NavLink>
              <div className="source">
                <a
                  href={`${entry.ref}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
