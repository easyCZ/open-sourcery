import React from 'react';

import { Button, Card, Image } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { Icon, Label } from 'semantic-ui-react'


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


const ProjectCard = ({ img, owner, name, description, stars, language }) => (
  <Card style={{ minWidth: '400px' }}>
    <Card.Content style={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <Image
        style={{
          objectFit: 'cover',
          margin: '0 1em 0 0'
        }}
        size='tiny'
        floated='left'
        src={img}
        width='100px'
        height='100px'
        shape='rounded'
      />
      <div>
         <Header size='medium'>
          <span style={{ color: 'rgba(0, 0, 0, 0.3)' }}>{owner}/</span>
          <span>{name}</span>
        </Header>
        <p>{description}</p>
      </div>

    </Card.Content>
    <Card.Content extra>
      { language ? <Label as='a' basic> {language}</Label> : null }
      <Label as='a' basic> <Icon name='star' /> {stars}</Label>
    </Card.Content>
  </Card>
);

// const ProjectCard =({ img }) => (
//   <Card
//     image={img}
//     header='Elliot Baker'
//     meta='Friend'
//     description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
//   />
// );


// const ProjectCard = ({ img, owner, name, description }) => (
//   <Card style={styles.card}>
//     <Card.Content>
//       <div style={styles.row}>

//         <div style={styles.narrowCol}>
//           <img src={img} style={styles.logo} role="presentation" />
//         </div>

//         <div style={styles.wideCol}>
//           <h3 style={styles.title}>
//             <span style={styles.owner}>{owner}/</span>
//             <span>{name}</span>
//           </h3>
//           <p style={styles.description}>{description}</p>
//         </div>

//       </div>

//       <div style={styles.row}>

//         <div style={styles.meta}>
//           234 members * 14 posts
//         </div>

//       </div>
//     </Card.Content>
//   </Card>
// )


export default ProjectCard;