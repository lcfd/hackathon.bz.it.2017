export const SET_PERCENTAGE_FUEL = 'SET_PERCENTAGE_FUEL';
export const SET_PERCENTAGE_FASTFOOD = 'SET_PERCENTAGE_FASTFOOD';
export const SET_PERCENTAGE_ECOMMERCE = 'SET_PERCENTAGE_ECOMMERCE';
export const SET_PERCENTAGE_TRANSPORT = 'SET_PERCENTAGE_TRANSPORT';

export function set_percentage_fuel(payload) {
  return {
    type: SET_PERCENTAGE_FUEL,
    payload
  };
}

export function set_percentage_fastfood(payload) {
  return {
    type: SET_PERCENTAGE_FASTFOOD,
    payload
  };
}

export function set_percentage_ecommerce(payload) {
  return {
    type: SET_PERCENTAGE_ECOMMERCE,
    payload
  };
}

export function set_percentage_transport(payload) {
  return {
    type: SET_PERCENTAGE_TRANSPORT,
    payload
  };
}
