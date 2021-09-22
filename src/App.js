import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import SingleShelter from './views/SingleShelter';
import Edit from './views/Edit';
import Create from './views/Create';
import AllShelters from './views/AllShelters';

function App() {
  
  
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <BrowserRouter>
     
      <Link to="/">back to home</Link>
      <Switch>
        <Route exact path="/">
          <AllShelters />
        </Route>

        <Route exact path="/shelters/new">
          <Create />
        </Route>

        <Route exact path="/shelters/:_id">
          <SingleShelter />
        </Route>

        <Route exact path="/shelters/:_id/edit">
          <Edit />
        </Route>
      </Switch>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
