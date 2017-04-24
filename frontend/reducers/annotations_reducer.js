import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_ANNOTATION,
  RECEIVE_ALL_ANNOTATIONS,
  REMOVE_ANNOTATION
} from '../actions/annotation_actions';
import merge from 'lodash/merge';

let defaultState = {
  annotations: [],
  currentAnnotation: {}
};

const AnnotationsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_ANNOTATIONS:
      const receiveAll = Object.assign({}, state);
      receiveAll.annotations = action.annotations;
      return receiveAll;
    case RECEIVE_ANNOTATION:
      const receiveAnnotation = Object.assign({}, state);
      receiveAnnotation.currentAnnotation = action.annotation;
      return receiveAnnotation;
    case REMOVE_ANNOTATION:
      const removeAnnotation = Object.assign({}, state);
      removeAnnotation.annotations.filter(annotation => annotation.id === action.annotation.id);
      return removeAnnotation;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_ERRORS:
      const clearedErrors = Object.assign({}, state);
      clearedErrors.errors = [];
      return clearedErrors;
    default:
      return state;
  }
};

export default AnnotationsReducer;