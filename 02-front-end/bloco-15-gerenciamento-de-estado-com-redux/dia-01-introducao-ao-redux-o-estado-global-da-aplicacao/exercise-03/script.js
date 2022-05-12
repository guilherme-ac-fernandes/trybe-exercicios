const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};
showCountValue(0);

// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";
const INCREMENTO_VALUE = "INCREMENTO_VALUE";
const DECREMENTO_VALUE = "DECREMENTO_VALUE";

// ========== HTML ELEMENTS ==========
const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");
const inputInc = document.getElementById("inc-inpu");
const inputDec = document.getElementById("dec-inpu");
const countClick = document.getElementById('count-button');
const valueAdd = document.getElementById('add-values');

// ========== ACTIONS ==========
const actionIncremento = () => store.dispatch({ type: INCREMENTO });
const actionDecremento = () => store.dispatch({ type: DECREMENTO });

const actionIncrementoValue = ({target}) => {
  const value = Number(target.value);
  if (value) {
    inputInc.value = '';
    return store.dispatch({ type: INCREMENTO_VALUE, value })
  };
};

const actionDecrementoValue = ({target}) => {
  const value = Number(target.value);
  if (value) {
    inputDec.value = '';
    return store.dispatch({ type: DECREMENTO_VALUE, value })
  };
};

// ========== REDUCER ==========
const initialState = { 
  count: 0,
  incrementValue: 0,
  decrementValue: 0,
  clickCount: 0,
  addedValues: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTO:
      return {
        ...state, 
        count: state.count + 1,
        clickCount: state.clickCount + 1,
      };
    case DECREMENTO:
      return {
        ...state, 
        count: state.count - 1,
        clickCount: state.clickCount + 1,
      };
    case INCREMENTO_VALUE:
      return {
        ...state,
        incrementValue: action.value,
        count: state.count + action.value,
        addedValues: [...state.addedValues, action.value],
      };
    case DECREMENTO_VALUE:
      return {
        ...state,
        decrementValue: action.value,
        count: state.count - action.value,
        addedValues: [...state.addedValues, action.value],
      };
    default:
      return state;
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { count, clickCount, addedValues } = store.getState();
  
  showCountValue(count);
  countClick.innerText = clickCount;
  valueAdd.innerText = addedValues;
});


btnInc.addEventListener("click", actionIncremento);
btnDec.addEventListener('click', actionDecremento);
inputInc.addEventListener('change', actionIncrementoValue)
inputDec.addEventListener('change', actionDecrementoValue)
