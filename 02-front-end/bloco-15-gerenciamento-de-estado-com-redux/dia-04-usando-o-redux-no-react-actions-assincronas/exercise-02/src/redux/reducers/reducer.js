const INICIAL_STATE = {
  loading: true,
  character: [],
  error: '',
};

const reducer = (state=INICIAL_STATE, actions) => {
  switch (actions.type) {
    case '':
      return state;
    default: return state;
  }
}

export default reducer;