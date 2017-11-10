import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppWrapper from '../containers/AppWrapper';
import { DashboardHeader } from '../components/DashboardHeader';
import { Box } from '../components/Box';

/**
 * css
 */
import '../css/dashboard.css';

class DashboardContainer extends Component {
  render() {
    return (
      <AppWrapper class="dashboard container">
        <DashboardHeader />
        <Box>
          <p className="box__weekly-stats">WEEKLY STATS</p>
          <p className="box__weekly-stats-amount">
            € <strong>40,00</strong>
          </p>
          <hr style={{ marginBottom: 0 }} />
          <div className="row">
            <div className="col-5">1</div>
            <div className="col-2">
              <div className="box__weekly-vertical-line" />
            </div>
            <div className="col-5">1</div>
          </div>
        </Box>
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(DashboardContainer);
