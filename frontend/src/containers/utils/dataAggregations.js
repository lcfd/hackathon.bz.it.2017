import moment from 'moment';
import _ from 'lodash';
/**
 * Data
 */
import databank from '../../assets/data/databank.json';

export function dashboardMonthAggregation(props, subtractMonth) {
  let totFuel = 0;
  let totEcommerce = 0;
  let totFastFood = 0;
  let totTransport = 0;

  const currentMonth = moment().format('M') - subtractMonth;
  /**
   * Fuel
   */
  let filteredFuel = _.filter(databank.transactions, o => {
    const theMoth = moment(o.details.completed).format('M');
    return o.details.description == 'Filling Station' && theMoth == currentMonth;
  });
  filteredFuel.map(o => {
    totFuel += o.details.value * -1;
  });
  totFuel = totFuel * parseInt(props.user.fuelPercentage) / 100;
  console.log(totFuel);
  /**
   * Ecommerce
   */
  let filteredEcommerce = _.filter(databank.transactions, o => {
    const theMoth = moment(o.details.completed).format('M');
    return o.details.description == 'Shopping' && theMoth == currentMonth;
  });
  filteredEcommerce.map(o => {
    totEcommerce += o.details.value * -1;
  });
  totEcommerce = totEcommerce * parseInt(props.user.ecommercePercentage) / 100;
  console.log(totEcommerce);
  /**
   * Fast food
   */
  let filteredFastFood = _.filter(databank.transactions, o => {
    const theMoth = moment(o.details.completed).format('M');
    return o.details.description == 'Restaurants' && theMoth == currentMonth;
  });
  filteredFastFood.map(o => {
    totFastFood += o.details.value * -1;
  });
  totFastFood = totFastFood * parseInt(props.user.fastFoodPercentage) / 100;
  console.log(totFastFood);
  /**
   * Tranports
   */
  let filteredTransports = _.filter(databank.transactions, o => {
    const theMoth = moment(o.details.completed).format('M');
    return o.details.description == 'train ticket' && theMoth == currentMonth;
  });
  filteredTransports.map(o => {
    totTransport += o.details.value * -1;
  });
  totTransport = totTransport * parseInt(props.user.fastFoodPercentage) / 100;
  console.log(totTransport);

  const finalSum = (totEcommerce + totFastFood + totFuel + totTransport).toFixed(2);
  console.log(finalSum);
  return finalSum;
}
