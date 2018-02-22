import axios from 'axios';
export const IS_FETCHING = 'IS_FETCHING';
export const DOGS_FETCHED = 'DOGS_FETCHED';
export const ERROR_FETCHING_DOGS = 'ERROR_FETCHING_DOGS';

export const getDogs = () => {
  const dogs = axios.get('https://dog.ceo/api/breeds/list/all');
  return dispatch => {
    dispatch({ type: IS_FETCHING });
    dogs
      .then(({ data }) => {
        dispatch({ type: DOGS_FETCHED, payload: data.message });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_DOGS, payload: err });
      });
  };
};
