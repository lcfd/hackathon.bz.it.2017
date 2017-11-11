import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppWrapper from '../containers/AppWrapper';
import { PageHeader } from '../components/PageHeader';
import { Box } from '../components/Box';

import {
  set_percentage_ecommerce,
  set_percentage_fastfood,
  set_percentage_fuel,
  set_percentage_transport
} from '../actions/user';

/**
 * css
 */
import '../css/dashboard.css';
/**
 * assets
 */
import salvadanaio from '../assets/img/salvadanaio.svg';
import arrowRight from '../assets/img/arrow-right.svg';
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
      transportIsFlipped: false
    };
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
        <PageHeader class="dashboard__header" main="Your investments" sub="834€" />
        <Box>
          <img className="dashboard__box-salvadanaio-img" src={salvadanaio} alt="" />
          <p className="box__weekly-stats">WEEKLY STATS</p>
          <p className="box__weekly-stats-amount">
            € <strong>40,00</strong>
          </p>
          <p className="box__investment-this-week">Investment this week</p>
          <hr style={{ marginBottom: 0 }} />
          <div className="row">
            <div className="col-6">
              <p className="box__text-number-in-split">
                € <strong>40,00</strong>
              </p>
              <p className="box__text-under-number">Weekly average</p>
              <div className="box__weekly-vertical-line" />
            </div>

            <div className="col-6">
              <p className="box__text-number-in-split">
                € <strong>40,00</strong>
              </p>
              <p className="box__text-under-number">Average investment</p>
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
                <p className="box__investment-text">When I buy fuel I want to invest the 10% of what I paid.</p>
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
                  When I buy a meal from a fast food I want to invest the 10% of what I paid.
                </p>
                <div className="box__investment-perc-oval">{this.props.user.fastFoodPercentage}%</div>
              </div>
              <div className="box__left-arrow-action" data-name="fastFood" onClick={e => this.handleClickSetting(e)}>
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
              <div className="box__left-arrow-action" data-name="fastFood" onClick={e => this.handleClickSetting(e)}>
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
                  When I buy products from an ecommerce I want to invest the 10% of what I paid.
                </p>
                <div className="box__investment-perc-oval">{this.props.user.ecommercePercentage}%</div>
              </div>
              <div className="box__left-arrow-action" data-name="ecommerce" onClick={e => this.handleClickSetting(e)}>
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
              <div className="box__left-arrow-action" data-name="ecommerce" onClick={e => this.handleClickSetting(e)}>
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
                <p className="box__investment-text">When I travel I want to invest the 7% of what I paid.</p>
                <div className="box__investment-perc-oval">{this.props.user.transportPercentage}%</div>
              </div>
              <div className="box__left-arrow-action" data-name="transport" onClick={e => this.handleClickSetting(e)}>
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
              <div className="box__left-arrow-action" data-name="transport" onClick={e => this.handleClickSetting(e)}>
                <img className="" data-name="transport" src={close} alt="" />
              </div>
              <div className="clear" />
            </div>
          )}
        </Box>
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
  set_percentage_transport
})(DashboardContainer);
