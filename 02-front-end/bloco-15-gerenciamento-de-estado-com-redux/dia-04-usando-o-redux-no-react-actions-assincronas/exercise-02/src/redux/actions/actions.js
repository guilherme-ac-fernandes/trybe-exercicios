import charAPI from '../../services/charAPI';

export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const REQUEST_CHARACTER_SUCESS = 'REQUEST_CHARACTER_SUCESS';
export const REQUEST_CHARACTER_FAILED = 'REQUEST_CHARACTER_FAILED';

const requestCharacter = () => ({ type: REQUEST_CHARACTER });

const requestSucess = (data) => ({ type: REQUEST_CHARACTER_SUCESS, data });

const requestFailed = (error) => ({ type: REQUEST_CHARACTER_FAILED, error });

// Resolução utilizado a função charAPI 
const fetchCharacter = (char) => {
  return async (dispatch) => {
    try {
      dispatch(requestCharacter());
      const data = await charAPI(char);
      dispatch(requestSucess(data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  }
}

// Resolução criando a função assíncrona manualmente
// const fetchCharacter = (char) => {
//   const APIURL = 'https://anapioficeandfire.com/api/characters?name='
//   return async (dispatch) => {
//     dispatch(requestCharacter());
//     return fetch(`${APIURL}${char.split().join('+')}`)
//       .then((response) => response.json())
//       .then((data) => dispatch(requestSucess(data)))
//       .catch(error => dispatch(requestFailed(error)));
//   }
// }

export default fetchCharacter;
