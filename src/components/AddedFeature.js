import React from 'react';
import {connect} from 'react-redux';
import { actionRemove } from '../actions';

const AddedFeature = props => {
  
  const removedFeature = () => {
    props.removedFeature(props.feature)
  }


  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick = {removedFeature}>X</button>
      {props.feature.name}
    </li>
  );
};


export default connect(null, {removedFeature: actionRemove})(AddedFeature);
