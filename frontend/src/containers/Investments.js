import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppWrapper from '../containers/AppWrapper';
import { PageHeader } from '../components/PageHeader';
import { Box } from '../components/Box';

/**
 * css
 */
import '../css/investments.css';
/**
 * assets
 */
import investmentsMainIcon from '../assets/img/investmentsMainIcon.svg';

class InvestmentsContainer extends Component {
  render() {
    return (
      <AppWrapper class="investments container">
        <PageHeader class="investments__header" main="Your investments" />
        <Box>
          <img className="investments__box-main-img" src={investmentsMainIcon} alt="" />
          <p className="box__weekly-stats">YOUR INVESTMENT VALUES</p>
          <p className="box__weekly-stats-amount">
            € <strong>937</strong>
          </p>
          <p className="box__current-gain-success">+16.43(4.56%)</p>
          <hr />
          <a className="box__sell-button" onClick={() => alert('SELL MAAAAAN')}>SELL</a>
        </Box>
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(InvestmentsContainer);
