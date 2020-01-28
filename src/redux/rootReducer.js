import {combineReducers} from 'redux';
import reducerCake from '../cake/reducer';
import reducerIceCream from '../iceCream/reducer';

const rootReducer = combineReducers ({
  cake: reducerCake,
  iceCream: reducerIceCream,
});

export default rootReducer;
