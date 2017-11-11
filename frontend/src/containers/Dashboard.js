import React, { Component } from 'react';
import { connect } from 'react-redux';

import { dashboardMonthAggregation } from './utils/dataAggregations';
import AppWrapper from '../containers/AppWrapper';
import { PageHeader } from '../components/PageHeader';
import { Box } from '../components/Box';
import { SideMenu } from '../components/SideMenu';

import {
  set_percentage_ecommerce,
  set_percentage_fastfood,
  set_percentage_fuel,
  set_percentage_transport,
  set_invested_value_3_month
} from '../actions/user';

/**
 * css
 */
import '../css/dashboard.css';
/**
 * assets
 */
import salvadanaio from '../assets/img/salvadanaio.svg';
import edit from '../assets/img/edit.svg';
import close from '../assets/img/close.svg';
import fuel from '../assets/img/fuel.svg';
import hambuger from '../assets/img/hamburger.svg';
import plane from '../assets/img/plane.svg';
import ecommerce from '../assets/img/ecommerce.svg';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fuelIsFlipped: false,
      fastFoodIsFlipped: false,
      ecommerceIsFlipped: false,
      transportIsFlipped: false,
      aggregation: 0,
      aggregationPastMonth: 0,
      aggregationPastPastMonth: 0,
      monthlyAverage: 0
    };
  }

  componentDidMount() {
    let aggregation = dashboardMonthAggregation(this.props, 2);
    let aggregationPastMonth = dashboardMonthAggregation(this.props, 3);
    let aggregationPastPastMonth = dashboardMonthAggregation(this.props, 4);
    let monthlyAverage = parseInt(aggregation) + parseInt(aggregationPastMonth) + parseInt(aggregationPastPastMonth);
    this.props.set_invested_value_3_month(monthlyAverage);
    monthlyAverage = monthlyAverage / 3;
    this.setState({ aggregation, aggregationPastMonth, aggregationPastPastMonth, monthlyAverage });
  }

  componentWillReceiveProps(nextProps) {
    let reload = false;
    if (
      nextProps.user.fuelPercentage !== this.props.user.fuelPercentage ||
      nextProps.user.fastFoodPercentage !== this.props.user.fastFoodPercentage ||
      nextProps.user.ecommercePercentage !== this.props.user.ecommercePercentage ||
      nextProps.user.transportPercentage !== this.props.user.transportPercentage
    ) {
      let aggregation = dashboardMonthAggregation(this.props, 2);
      let aggregationPastMonth = dashboardMonthAggregation(this.props, 3);
      let aggregationPastPastMonth = dashboardMonthAggregation(this.props, 4);
      let monthlyAverage = parseInt(aggregation) + parseInt(aggregationPastMonth) + parseInt(aggregationPastPastMonth);
      this.props.set_invested_value_3_month(monthlyAverage);
      this.setState({
        aggregation,
        aggregationPastPastMonth
      });
    }
  }

  handleClickSetting = e => {
    console.log(e.target.dataset.name);
    let name = e.target.dataset.name;
    if (name) {
      let obj = {
        fuel: 'fuelIsFlipped',
        fastFood: 'fastFoodIsFlipped',
        ecommerce: 'ecommerceIsFlipped',
        transport: 'transportIsFlipped'
      };
      this.setState({ [obj[name]]: !this.state[obj[name]] });
    }
  };

  handleSetPercentage = e => {
    let name = e.target.dataset.name;
    if (name) {
      let obj = {
        fuel: this.props.set_percentage_fuel,
        fastFood: this.props.set_percentage_fastfood,
        ecommerce: this.props.set_percentage_ecommerce,
        transport: this.props.set_percentage_transport
      };
      obj[name](e.target.value);
    }
  };

  render() {
    return (
      <AppWrapper class="dashboard container">
        <PageHeader
          class="dashboard__header"
          main="Your investments"
          sub={`${(parseInt(this.props.user.investedValue3Month) * 1.42).toFixed(0)}€`}
        />
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 hidden-sm-down">
            <SideMenu />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-9">
            <Box>
              <img className="dashboard__box-salvadanaio-img" src={salvadanaio} alt="" />
              <p className="box__weekly-stats">MONTHLY STATS</p>
              <p className="box__weekly-stats-amount">
                € <strong>{parseInt(this.state.aggregation).toFixed(2)}</strong>
              </p>
              <p className="box__investment-this-week">Investment this month</p>
              <hr style={{ marginBottom: 0 }} />
              <div className="row">
                <div className="col-6">
                  <p className="box__text-number-in-split">
                    € <strong>{parseInt(this.state.aggregationPastMonth).toFixed(2)}</strong>
                  </p>
                  <p className="box__text-under-number">Previous month</p>
                  <div className="box__weekly-vertical-line" />
                </div>

                <div className="col-6">
                  <p className="box__text-number-in-split">
                    € <strong>{parseInt(this.state.monthlyAverage).toFixed(2)}</strong>
                  </p>
                  <p className="box__text-under-number">Monthly average</p>
                </div>
              </div>
            </Box>
            <p className="dashboard__your-active-investmets">YOUR ACTIVE INVESTMENTS</p>

            {/* Investments */}

            <Box>
              {!this.state.fuelIsFlipped ? (
                <div>
                  <div className="box__investment-content">
                    <p className="box__investment-title">
                      <img src={fuel} alt="" /> Fuel
                    </p>
                    <p className="box__investment-text">
                      When I buy fuel I want to invest the {this.props.user.fuelPercentage}% of what I paid.
                    </p>
                    <div className="box__investment-perc-oval">{this.props.user.fuelPercentage}%</div>
                  </div>
                  <div className="box__left-arrow-action" data-name="fuel" onClick={e => this.handleClickSetting(e)}>
                    <img className="" data-name="fuel" src={edit} alt="" />
                  </div>
                  <div className="clear" />
                </div>
              ) : (
                <div>
                  <div className="box__investment-content">
                    <p className="box__investment-title">Invest {this.props.user.fuelPercentage} %</p>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      data-name="fuel"
                      value={parseInt(this.props.user.fuelPercentage)}
                      onChange={e => this.handleSetPercentage(e)}
                    />
                  </div>
                  <div className="box__left-arrow-action" data-name="fuel" onClick={e => this.handleClickSetting(e)}>
                    <img className="" data-name="fuel" src={close} alt="" />
                  </div>
                  <div className="clear" />
                </div>
              )}
            </Box>

            <Box>
              {!this.state.fastFoodIsFlipped ? (
                <div>
                  <div className="box__investment-content">
                    <p className="box__investment-title">
                      <img src={hambuger} alt="" /> Fast food
                    </p>
                    <p className="box__investment-text">
                      When I buy a meal from a fast food I want to invest the {this.props.user.fastFoodPercentage}% of
                      what I paid.
                    </p>
                    <div className="box__investment-perc-oval">{this.props.user.fastFoodPercentage}%</div>
                  </div>
                  <div
                    className="box__left-arrow-action"
                    data-name="fastFood"
                    onClick={e => this.handleClickSetting(e)}
                  >
                    <img className="" data-name="fastFood" src={edit} alt="" />
                  </div>
                  <div className="clear" />
                </div>
              ) : (
                <div>
                  <div className="box__investment-content">
                    <p className="box__investment-title">Invest {this.props.user.fastFoodPercentage} %</p>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      data-name="fastFood"
                      value={parseInt(this.props.user.fastFoodPercentage)}
                      onChange={e => this.handleSetPercentage(e)}
                    />
                  </div>
                  <div
                    className="box__left-arrow-action"
                    data-name="fastFood"
                    onClick={e => this.handleClickSetting(e)}
                  >
                    <img className="" data-name="fastFood" src={close} alt="" />
                  </div>
                  <div className="clear" />
                </div>
              )}
            </Box>

            <Box>
              {!this.state.ecommerceIsFlipped ? (
                <div>
                  <div className="box__investment-content">
                    <p className="box__investment-title">
                      <img src={ecommerce} alt="" /> Ecommerce
                    </p>
                    <p className="box__investment-text">
                      When I buy products from an ecommerce I want to invest the {this.props.user.ecommercePercentage}%
                      of what I paid.
                    </p>
                    <div className="box__investment-perc-oval">{this.props.user.ecommercePercentage}%</div>
                  </div>
                  <div
                    className="box__left-arrow-action"
                    data-name="ecommerce"
                    onClick={e => this.handleClickSetting(e)}
                  >
                    <img className="" data-name="ecommerce" src={edit} alt="" />
                  </div>
                  <div className="clear" />{' '}
                </div>
              ) : (
                <div>
                  <div className="box__investment-content">
                    <p className="box__investment-title">Invest {this.props.user.ecommercePercentage} %</p>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      data-name="ecommerce"
                      value={parseInt(this.props.user.ecommercePercentage)}
                      onChange={e => this.handleSetPercentage(e)}
                    />
                  </div>
                  <div
                    className="box__left-arrow-action"
                    data-name="ecommerce"
                    onClick={e => this.handleClickSetting(e)}
                  >
                    <img className="" data-name="ecommerce" src={close} alt="" />
                  </div>
                  <div className="clear" />
                </div>
              )}
            </Box>

            <Box>
              {!this.state.transportIsFlipped ? (
                <div>
                  <div className="box__investment-content">
                    <p className="box__investment-title">
                      <img src={plane} style={{ width: '24px' }} alt="" />Transport
                    </p>
                    <p className="box__investment-text">When I travel I want to invest the {this.props.user.transportPercentage}% of what I paid.</p>
                    <div className="box__investment-perc-oval">{this.props.user.transportPercentage}%</div>
                  </div>
                  <div
                    className="box__left-arrow-action"
                    data-name="transport"
                    onClick={e => this.handleClickSetting(e)}
                  >
                    <img className="" data-name="transport" src={edit} alt="" />
                  </div>
                  <div className="clear" />
                </div>
              ) : (
                <div>
                  <div className="box__investment-content">
                    <p className="box__investment-title">Invest {this.props.user.transportPercentage} %</p>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      data-name="transport"
                      value={parseInt(this.props.user.transportPercentage)}
                      onChange={e => this.handleSetPercentage(e)}
                    />
                  </div>
                  <div
                    className="box__left-arrow-action"
                    data-name="transport"
                    onClick={e => this.handleClickSetting(e)}
                  >
                    <img className="" data-name="transport" src={close} alt="" />
                  </div>
                  <div className="clear" />
                </div>
              )}
            </Box>
          </div>
        </div>
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {
  set_percentage_ecommerce,
  set_percentage_fastfood,
  set_percentage_fuel,
  set_percentage_transport,
  set_invested_value_3_month
})(DashboardContainer);
