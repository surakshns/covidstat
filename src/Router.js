import React from 'react';
import { Switch, Route } from 'react-router-dom';
import News from './pages/News';
import Stats from './pages/Stats';
import Contacts from './pages/contact';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}

      <Route exact path='/covid' component={Stats}></Route>
      <Route path='/News' component={News}></Route>
      <Route path='/Contact' component={Contacts}></Route>

    </Switch>
  
  );
}

export default Main;