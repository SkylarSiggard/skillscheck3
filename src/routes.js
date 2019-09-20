import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import AddName from './Components/AddHouse'
import AddUrl from './Components/AddUrl'


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/addhouse' component={AddName}/>
        <Route path='/addurl' component={AddUrl}/>

    </Switch>
)