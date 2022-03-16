//HashRouter  (./router/index.tsx)
import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Calendar from '../calendar'
import Collection from '../collection'
import Forum from '../forum'
import Mywallet from '../mywallet'
import Trende from '../trende'
import Login from '../views/login/Login'


export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Trende}></Route>
          <Route path="/trending" exact component={Trende}></Route>
          <Route path="/calendar" exact component={Calendar}></Route>
          <Route path ="/Collection" component={Collection}/>
          <Route path="/My Wallet" component={Mywallet}/>
          <Route path ='/Forum' component={Forum }/>
        </Switch>
      </HashRouter>
    )
  }
}
