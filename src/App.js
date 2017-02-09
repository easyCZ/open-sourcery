import React, { Component } from 'react';

import Header from './header';
import ProjectCard from './projects/ProjectCard';

import reactImage from './logo.svg';
import twitterImage from './Twitter.svg';
import bloomberg from './Bloomberg_Business.svg';

console.log(ProjectCard)

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <div style={{
          display: 'flex'
        }}>
          <ProjectCard
            img={reactImage}
            name="react-native"
            owner="facebook"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            img={twitterImage}
            name="react-native"
            owner="facebook"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            img={bloomberg}
            name="react-native"
            owner="facebook"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    );
  }
}

export default App;
