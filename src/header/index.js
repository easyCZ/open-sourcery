import React, { Component } from 'react'
import { Link } from 'react-router'
import { Icon } from 'semantic-ui-react'

const styles = {
  container: {
    backgroundColor: 'white',
    padding: '0 16px',
    fontSize: '20px',
    height: '50px',
    lineHeight: 2.5,
    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)'
  }
}


class Header extends Component {

  constructor(props) {
    super(props)
    const { owner, repo } = props.params
    this.state = {owner: owner, repo: repo}
  }

  componentWillReceiveProps(nextProps) {
    const { owner, repo } = nextProps.params
    this.setState({owner: owner, repo: repo})
  }


  render() {
    const { owner, repo } = this.state
    return (
      <div>
        <header style={styles.container}>
          <Link to='/' style={owner ? {color: 'rgba(0, 0, 0, 0.3)'} : {color: 'rgb(0, 0, 0)'} }>OpenSourcery</Link>
          { owner ?  (
            <Link to={`/${owner}/${repo}`} style={{color: 'rgb(0, 0, 0)'}}>
              <Icon name='chevron right'/>
              {owner}/{repo}
            </Link>) 
            : null 
          }
        </header>
        <main>{this.props.children}</main>
      </div>
    )
  }
}

export default Header;