import React from 'react';
import { Switch, Route } from 'react-router-dom';
import News from './pages/News';
import Stats from './pages/Stats';
import Contact from './pages/contact';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}

      <Route exact path='/' component={Stats}></Route>
      <Route path='/News' component={News}></Route>
      <Route path='/Contact' component={Contact}></Route>

    </Switch>
  
  );
}

export default Main;