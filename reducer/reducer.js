const globalState = {
  details:'hello',
}
const reducer = (state = globalState,action) =>
{
  console.log("state value",state);
  console.log("action value",action);
  switch(action.type){
    case "LOGINDETAILS" : 
    return {
      details : action.searchValue,
    }
     default : return state;
  }
 
}

export default reducer;