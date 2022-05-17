import { REQUEST_CHARACTER, REQUEST_CHARACTER_SUCESS, REQUEST_CHARACTER_FAILED } from "../actions/actions";
const INICIAL_STATE = {
  loading: false,
  character: {},
  error: '',
};

const reducer = (state=INICIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CHARACTER:
      return { ...state, loading: true };
    case REQUEST_CHARACTER_SUCESS:
      return { ...state, character: { ...action.data[0] }, loading: false };
    case REQUEST_CHARACTER_FAILED:
      return { ...state, error: action.error };
    default: return state;
  }
}

export default reducer;