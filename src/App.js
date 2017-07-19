import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Header from './header';
import ProjectCard from './projects/ProjectCard';
import IssueCard from './issues/IssueCard';

import firebase from 'firebase'

import reactImage from './logos/logo.svg';
import twitterImage from './logos/Twitter.svg';
import bloomberg from './logos/Bloomberg_Business.svg';

import { Button, Card, Image } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCFP9yQ8dcnhOFtHTFAiS5PrAWdamn_2D4",
  authDomain: "https://open-sourcery.firebaseio.com",
  databaseURL: "https://open-sourcery.firebaseio.com",
}

firebase.initializeApp(FIREBASE_CONFIG);


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

class ProjectCardExampleGroups extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    const db = firebase.database();
    db.ref('issues').once('value').then(snapshot => {
      this.setState({repos: Object.values(snapshot.val())})
      console.log('snap', snapshot.val())

    })
  }

  render() {
    return (
      <Card.Group style={{margin: '0.5em'}}>
        {this.state.repos.map(repo =>
          <ProjectCard
            img={require('./logos/missing.png')}
            name={repo.Repo}
            owner={repo.Owner}
            description={repo.description}
            stars={100}
            language={'JavaScript'}
          />)
        }
      </Card.Group>
    )
  }
}

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

          <Route path=':owner/:repo' component={IssueCardExampleGroups}/>

          <Route path='*' component={NotFound}/>
        </Route>
      </Router>
    );
  }
}

export default App;
