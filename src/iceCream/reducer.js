import {BUY_ICE_CREAM} from './actionTypes';

const initalState = {
  numOfIceCream: 10,
};

function reducerIceCream (state = initalState, action) {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
}

export default reducerIceCream;
