import React from 'react';

import Card from '../card';

const styles = {
  card: {
    margin: '0.5em'
  },
  logo: {
    width: '90px',
    height: '90px',
    // padding: '10px',
    objectFit: 'scale-down'
  },
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  narrowCol: {
    width: '125px'
  },
  title: {
    margin: '0.5em 0',
  },
  owner: {
    color: 'rgba(0, 0, 0, 0.3)'
  },
  description: {
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: 1.25,
    margin: '0.5em 0'
  },
  wideCol: {
    marginLeft: '15px'
  },
  meta: {
    fontSize: '13px'
  }
}


const ProjectCard = ({ img, owner, name, description }) => (
  <Card style={styles.card}>
    <div style={styles.row}>

      <div style={styles.narrowCol}>
        <img src={img} style={styles.logo} role="presentation" />
      </div>

      <div style={styles.wideCol}>
        <h3 style={styles.title}>
          <span style={styles.owner}>{owner}/</span>
          <span>{name}</span>
        </h3>
        <p style={styles.description}>{description}</p>
      </div>

    </div>

    <div style={styles.row}>

      <div style={styles.meta}>
        234 members * 14 posts
      </div>

    </div>
  </Card>
)


export default ProjectCard;