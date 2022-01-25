import questionsReducer from './questionsReducer';
import pointsReducer from './pointsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  points: pointsReducer,
  questions: questionsReducer,
});

export default rootReducer;
