import {
  SET_PERCENTAGE_ECOMMERCE,
  SET_PERCENTAGE_FASTFOOD,
  SET_PERCENTAGE_FUEL,
  SET_PERCENTAGE_TRANSPORT
} from '../actions/user';

const initialState = {
  fullName: 'Marco Costa',
  fuelPercentage: 5,
  fastFoodPercentage: 10,
  ecommercePercentage: 3,
  transportPercentage: 7
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
    default:
      return state;
  }
}
