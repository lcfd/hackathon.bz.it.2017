import {
  SET_PERCENTAGE_ECOMMERCE,
  SET_PERCENTAGE_FASTFOOD,
  SET_PERCENTAGE_FUEL,
  SET_PERCENTAGE_TRANSPORT,
  SET_INVESTED_VALUE_3_MONTH
} from '../actions/user';

const initialState = {
  fullName: 'Peter Dolon',
  fuelPercentage: 5,
  fastFoodPercentage: 10,
  ecommercePercentage: 3,
  transportPercentage: 7,
  investedValue3Month: 0
};
export function user(state = initialState, action) {
  switch (action.type) {
    case SET_PERCENTAGE_ECOMMERCE:
      return {
        ...state,
        ecommercePercentage: action.payload
      };
    case SET_PERCENTAGE_FASTFOOD:
      return {
        ...state,
        fastFoodPercentage: action.payload
      };
    case SET_PERCENTAGE_FUEL:
      return {
        ...state,
        fuelPercentage: action.payload
      };
    case SET_PERCENTAGE_TRANSPORT:
      return {
        ...state,
        transportPercentage: action.payload
      };
    case SET_INVESTED_VALUE_3_MONTH:
      return {
        ...state,
        investedValue3Month: action.payload
      };
    default:
      return state;
  }
}
