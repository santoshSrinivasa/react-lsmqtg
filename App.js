import React from 'react';
import {connect} from "react-redux";
import ViewData from "./viewdata";

function mapStateToProps(state){
  return {
    clickValue: state.details,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendDetails : (details) => dispatch({  type: 'LOGINDETAILS',searchValue:details}),
  }
}

class App extends React.Component
{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault();
    const value = "world";
    this.props.sendDetails(value);
  }
  render(){
    return (
      <div>
      <p>hello</p>
      <button type="button" onClick={this.handleClick}>Login</button>
      <ViewData/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);