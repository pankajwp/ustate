import {BUY_CAKE} from './actionTypes';

const initalState = {
  numOfCakes: 10,
};

function reducerCake (state = initalState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
}

export default reducerCake;
