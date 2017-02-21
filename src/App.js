import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import Header from './header';
import ProjectCard from './projects/ProjectCard';
import IssueCard from './issues/IssueCard';

import reactImage from './logos/logo.svg';
import twitterImage from './logos/Twitter.svg';
import bloomberg from './logos/Bloomberg_Business.svg';

import { Button, Card, Image } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'


const repos = [
  {
    img: require('./logos/freecodecamp.svg'),
    owner: 'freeCodeCamp',
    name: 'freeCodeCamp',
    'description': 'The https://freeCodeCamp.com open source codebase and curriculum. Learn to code and help nonprofits.',
    language: 'JavaScript',
    stars: 231796
  },
  {
    img: require('./logos/bootstrap.svg'),
    owner: 'twbs',
    name: 'bootstrap',
    'description': 'The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.',
    language: 'JavaScript',
    stars: 106551
  },
  {
    img: require('./logos/missing.png'),
    owner: 'vhf',
    name: 'free-programming-books',
    'description': '📚 Freely available programming books',
    language: null,
    stars: 77766
  },
  {
    img: require('./logos/d3.svg'),
    owner: 'd3',
    name: 'd3',
    'description': 'Bring data to life with SVG, Canvas and HTML. 📊📈🎉',
    language: 'JavaScript',
    stars: 60172
  },
  {
    owner: 'facebook',
    name: 'react',
    img: reactImage,
    'description': 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    language: 'JavaScript',
    stars: 59455
  },
  {
    owner: 'angular',
    name: 'angular.js',
    img: require('./logos/angular-icon.svg'),
    'description': 'AngularJS - HTML enhanced for web apps!',
    language: 'JavaScript',
    stars: 54664
  }
]

const NotFound = () => (
  <div>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>
)

const ProjectCardExampleGroups = () => (
  <Card.Group style={{ margin: '0.5em' }}>
    {repos.map(repo =>
      <ProjectCard
        img={repo.img}
        name={repo.name}
        owner={repo.owner}
        description={repo.description}
        stars={repo.stars}
        language={repo.language}
      />)
    }
  </Card.Group>
)

const IssueCardExampleGroups = () => (
  <Card.Group style={{ margin: '0.5em' }}>
    {repos.map(repo =>
      <IssueCard
        img={repo.img}
        name={repo.name}
        owner={repo.owner}
        description={repo.description}
        stars={repo.stars}
        language={repo.language}
      />)
    }
  </Card.Group>
)

class App extends Component {
  render() {

    return (
      <Router history={browserHistory}>
        <Route path='/' component={Header}>
          <IndexRoute component={ProjectCardExampleGroups}/>

          <Route path='issues/:owner/:repo' component={IssueCardExampleGroups}/>

          <Route path='*' component={NotFound}/>
        </Route>
      </Router>
    );
  }
}

export default App;
