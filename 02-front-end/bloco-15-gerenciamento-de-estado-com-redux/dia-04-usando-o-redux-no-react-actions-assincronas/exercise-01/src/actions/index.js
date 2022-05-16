export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

const requestAPI = () => ({ type: REQUEST_API });

const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(requestAPI());
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return dispatch(getPicture(data));
  }
}

// Resolução da requisição da API com try/catch => Proveniente do course da Trybe (sourcce: https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/react-com-redux-parte-2/solutions/1c0aaaf2-dd2d-4a0f-9a7e-513c21121780/a-game-of-thunks-quer-dizer-of-thrones/364a3bc9-4889-424f-bc51-1b1ac99a2813?use_case=calendar)
// export function fetchAPI() {
//   return async (dispatch) => {
//     try {
//       dispatch(requestAPI());
//       const response = await fetch('https://api.thecatapi.com/v1/images/search');
//       const data = await response.json();
//       dispatch(getPicture(data));
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }
