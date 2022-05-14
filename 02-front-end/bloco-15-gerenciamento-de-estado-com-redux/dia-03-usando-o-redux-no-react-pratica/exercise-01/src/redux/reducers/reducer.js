import { SUBMIT_PERSONAL, SUBMIT_PROFISSIONAL } from '../actions/action';

const INICIAL_STATE = {
  personalForms: {},
  profissionalForms: {},
};

const reducer = (state = INICIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case SUBMIT_PERSONAL:
      return {
        ...state,
        personalForms: { ...action.payload },
      };
    case SUBMIT_PROFISSIONAL:
      return {
        ...state,
        profissionalForms: { ...action.payload },
      };
    default:
      return state;
  }
};

export default reducer;
