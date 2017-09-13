import { combineReducers } from 'redux';
import NumbersReducer from './reducer_number';

const rootReducer = combineReducers({
  number: NumbersReducer
});

export default rootReducer;
