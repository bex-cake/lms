import axios from "axios";
import * as actionTypes from "./actionTypes";

const getCOURSESListStart = () => {
  return {
    type: actionTypes.GET_COURSES_LIST_START
  };
};

const getCOURSESListSuccess = courses => {
  return {
    type: actionTypes.GET_COURSES_LIST_SUCCESS,
    courses
  };
};

const getCOURSESListFail = error => {
  return {
    type: actionTypes.GET_COURSES_LIST_FAIL,
    error: error
  };
};

export const getCOURSES = token => {
  return dispatch => {
    dispatch(getCOURSESListStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get("http://127.0.0.1:8000/courses/")
      .then(res => {
        const courses = res.data;
        dispatch(getCOURSESListSuccess(courses));
      })
      .catch(err => {
        dispatch(getCOURSESListFail());
      });
  };
};
