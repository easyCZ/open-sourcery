import React from 'react';
import Login from '../../components/Login/Login.js';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';



class LoginPage extends React.Component {

  render() {
    return (  
      <Layout>

        <Panel>
          <Login />
        </Panel>

      </Layout>
    )
  }

}

export default LoginPage;
