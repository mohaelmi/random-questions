import React, { Component } from 'react';
import './App.css';
import { Layout, Drawer, Navigation, Content, Header } from 'react-mdl';
import Routerr from './components/router';

import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (

      <div style={{height: '550px', position: 'relative'}}>
    <Layout fixedHeader>
      <Header title={<span><span style={{ color: '#ddd' }}></span><strong>funny random questions for art students in sky school</strong></span>}>
            <Navigation>
                <Link to="/aboutme">About me</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="please pick one">
            <Navigation >
              <p>who is alway angry</p>
              <p>who is smartest</p>
              <p>who is most lucky</p>    
              <p>who is stupid one </p>    
              <p>who is shortest one</p>
              <p>who is oftenly sad</p>
              <p>who love break and coffee </p>    
              <p>who always talks more </p>    
              <p>who is tallest one</p>    
              <p>who is most happy</p>    
              <p>who is crazy</p>    
              <p>who is cool</p>    
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Routerr/>
        </Content>
      </Layout>
    </div>
    )
  }
}

export default App;
