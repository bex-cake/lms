import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  courses: [],
  currentCourse: {},
  error: null,
  loading: false
};

const getCOURSESListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCOURSESListSuccess = (state, action) => {
  return updateObject(state, {
    courses: action.courses,
    error: null,
    loading: false
  });
};

const getCOURSESListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COURSES_LIST_START:
      return getCOURSESListStart(state, action);
    case actionTypes.GET_COURSES_LIST_SUCCESS:
      return getCOURSESListSuccess(state, action);
    case actionTypes.GET_ASSIGNMENTS_LIST_FAIL:
      return getCOURSESListFail(state, action);
    default:
      return state;
  }
};

export default reducer;
