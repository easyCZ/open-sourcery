import React, { PropTypes } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

const actions = [
  { label: 'Alarm', raised: true, icon: 'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];

const NavigationTest = () => (
  <Navigation type='horizontal' title="OpenSourcery">
    <Link href='/login' label='Login' icon='person' />
  </Navigation>
);

const Navbar = () => {
  return (<AppBar fixed flat>
      <NavigationTest />
    </AppBar>
  )
}

export default Navbar;
