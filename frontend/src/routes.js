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

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/setPerc" component={SetPercContainer} />
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/investments" component={InvestmentsContainer} />
          <Route exact path="/" component={DashboardContainer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
