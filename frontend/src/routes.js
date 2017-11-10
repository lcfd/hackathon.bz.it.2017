import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Containers
 */
// import LoginContainer from './containers/Login';
import DashboardContainer from './containers/Dashboard';
import SetPercContainer from './containers/SetPerc';
import ProfileContainer from './containers/Profile';
import InvestmentsContainer from './containers/Investments';
import StatsContainer from './containers/Stats';
import App from './App';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardContainer} />
          <Route path="/setPerc" component={SetPercContainer} />
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/investments" component={InvestmentsContainer} />
          <Route path="/stats" component={StatsContainer} />
          <Route component={App} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
