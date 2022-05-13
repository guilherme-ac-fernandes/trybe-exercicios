import { MAKE_LOGIN } from "../actions/actions";

const INICIAL_STATE = {
  loginInfo: {},
  allCustumers: [],
};

const reducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case MAKE_LOGIN:
      return {
        ...state,
        loginInfo: { ...action.payload },
      };
    default:
      return state;
  }
};

export default reducer;
