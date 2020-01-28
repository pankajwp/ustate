import React from 'react';
import {connect} from 'react-redux';
//import buyCake from '../cake/actions';
import {buyIceCream} from '../redux';

function IceCreamContainer (props) {
  return (
    <div>
      <center>
        <h2>Num of IceCream {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy Ice Cream</button>
      </center>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch (buyIceCream ()),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (
  IceCreamContainer
);
