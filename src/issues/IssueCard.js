import React from 'react';

import { Button, Card, Image } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { Icon, Label } from 'semantic-ui-react'

const IssueCard = ({ img, owner, name, description, stars, language }) => (
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

export default IssueCard