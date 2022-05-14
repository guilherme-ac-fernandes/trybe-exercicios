import { MAKE_LOGIN, REGISTER, REMOVE_CUSTOMER, UPDATE_SORTED } from "../actions/actions";

const INICIAL_STATE = {
  loginInfo: {},
  allCustumers: [],
  allCustumersSorted: [],
  sorted: false,
};

const sortByName = (a, b) => {
  const nameA = a.name.toUpperCase(); 
  const nameB = b.name.toUpperCase(); 
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
}

const reducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case MAKE_LOGIN:
      return {
        ...state,
        loginInfo: { ...action.payload },
      };
    case REGISTER:
      const newStateRegister = [ ...state.allCustumers, action.payload ];
      return {
        ...state,
        allCustumers: [ ...state.allCustumers, action.payload ],
        allCustumersSorted: newStateRegister.sort(sortByName),
      };
    case REMOVE_CUSTOMER:
      const newStateRemove = state.allCustumers.filter((obj) => obj !== action.payload);
      return {
        ...state,
        allCustumers: state.allCustumers.filter((obj) => obj !== action.payload),
        allCustumersSorted: newStateRemove.sort(sortByName)
      };
      case UPDATE_SORTED:
        return {
          ...state,
          sorted: !state.sorted,
        };
    default: return state;
  }
};

export default reducer;
