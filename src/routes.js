import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Lesson from './pages/Lesson';
import Conquest from './pages/Conquest';
import Conquests from './pages/Conquests';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />                            
                <Route path="/profile" component={Profile} />
                <Route path="/lesson" component={Lesson} />
                <Route path="/conquests" component={Conquests} />
                <Route path="/conquest" component={Conquest} />
            </Switch>
        </BrowserRouter>
    )
}