import React from 'react';
import {connect} from "react-redux";


function mapStateToProps(state){
  return {
    clickValue: state.details,
  }
}
class ViewData extends React.Component 
{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      {this.props.clickValue}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ViewData);