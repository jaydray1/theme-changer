import React, { Component } from 'react';

export default class SizeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  // react doesn't call this method upon mounting, it only calls it
  // if props are changed/passed down from the parent
  componentWillReceiveProps(props) {
    this.setState({allowEdit: props.allowEdit})
  }
// this.props.update comes from the parent component, it is passed down
// to this child component by the props object
  render() {
    return (
      <select 
      className="dropDownContainer"
      onChange={(e) => this.props.update(parseInt(e.target.value))}
      disabled={this.state.allowEdit === 'false'}
      >
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    )
  }
}