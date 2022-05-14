export const MAKE_LOGIN = 'MAKE_LOGIN';
export const REGISTER = 'REGISTER';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
export const UPDATE_SORTED = 'UPDATE_SORTED';

export const loginAction = (payload) => ({ type: MAKE_LOGIN, payload });

export const registerAction = (payload) => ({ type: REGISTER, payload });

export const removeAction = (payload) => ({ type: REMOVE_CUSTOMER, payload });

export const updateSortedAction = () => ({ type: UPDATE_SORTED}); 
