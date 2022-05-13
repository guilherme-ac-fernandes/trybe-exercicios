import { SUBMIT_PERSONAL } from '../actions/action';

const INICIAL_STATE = {
  personalForms: {},
};

const reducer = (state = INICIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case SUBMIT_PERSONAL:
      return {
        ...state,
        personalForms: { ...action.payload }
      };
    default:
      return state;
  }
};

export default reducer;
