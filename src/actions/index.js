import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const fetch = _ => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get(`https://swapi.co/api/people/`)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: "Error 404: Cannot find character" });
    });
};
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
