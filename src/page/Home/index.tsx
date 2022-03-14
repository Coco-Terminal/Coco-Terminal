//HashRouter  (./router/index.tsx)
import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Caledar from '../caledar'
import Trende from '../trende'
import Login from '../views/login/Login'

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/trende" exact component={Trende}></Route>
          <Route path="/caledar" exact component={Caledar}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
