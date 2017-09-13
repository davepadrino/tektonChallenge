import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNumber } from '../actions/index';
import NumberList from './number-list'

class SearchBar extends Component {
  render() {
    return (
        <div>
          <input
            type="range"
            min="0"
            max="9"
            value={this.props.selected}
            onChange={(e) => this.props.selectNumber(e.target.value)}
          />
          <NumberList number={this.props.selected}/>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    selected: state.number.selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectNumber}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
