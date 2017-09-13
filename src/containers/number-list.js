import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNumber} from '../actions/index';

class NumberList extends Component{
  handleBits(bitCounter){
    const conf = {
        "0": [1,1,1,0,1,1,1],
        "1": [0,0,1,0,0,1,0],
        "2": [1,0,1,1,1,0,1],
        "3": [1,0,1,1,0,1,1],
        "4": [0,1,1,1,0,1,0],
        "5": [1,1,0,1,0,1,1],
        "6": [1,1,0,1,1,1,1],
        "7": [1,0,1,0,0,1,0],
        "8": [1,1,1,1,1,1,1],
        "9": [1,1,1,1,0,1,0]
    };
    let some = conf[this.props.number]
    return some[bitCounter] != 1;
  }
  render() {


    return (
      <div className="canvas">
      <div className={`a horizontal ${this.handleBits(0) ? "hidden" : "blocked"}`}>A</div>
      <div className={`b vertical ${this.handleBits(1) ? "hidden" : "blocked"}`}>B</div>
      <div className={`c vertical ${this.handleBits(2) ? "hidden" : "blocked"}`}>C</div>
      <div className={`d horizontal ${this.handleBits(3) ? "hidden" : "blocked"}`}>D</div>
      <div className={`e vertical ${this.handleBits(4) ? "hidden" : "blocked"}`}>E</div>
      <div className={`f vertical ${this.handleBits(5) ? "hidden" : "blocked"}`}>F</div>
      <div className={`g horizontal ${this.handleBits(6) ? "hidden" : "blocked"}`}>G</div>
      </div>
    );
  }
}



function mapDispatchToProps(dispatch){
  return bindActionCreators({selectNumber}, dispatch);
}

export default connect(null, mapDispatchToProps)(NumberList);
