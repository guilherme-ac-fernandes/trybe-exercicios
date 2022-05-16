import charAPI from '../../services/charAPI';

export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const REQUEST_CHARACTER_SUCESS = 'REQUEST_CHARACTER_SUCESS';
export const REQUEST_CHARACTER_FAILED = 'REQUEST_CHARACTER_FAILED';

const requestCharacter = () => ({ TYPE: REQUEST_CHARACTER });

const requestSucess = (data) => ({ TYPE: REQUEST_CHARACTER_SUCESS, data });

const requestFailed = (error) => ({ TYPE: REQUEST_CHARACTER_FAILED, error });

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

export default fetchCharacter;
