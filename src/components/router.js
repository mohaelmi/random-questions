import React from 'react';
import { Switch , Route } from 'react-router-dom'
import Home from './home';
import Aboutme from './aboutme';
import Contact from './contact';

 

const Routerr = () => (
    <Switch>
        <Route exact path="/"  component ={Home} />
        <Route path="/aboutme" component ={Aboutme} />
        <Route path="/contact" component={Contact} />
    </Switch>

);

export default Routerr