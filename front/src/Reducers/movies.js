import { GET, SEARCH } from '../Actions/movies';
// ANCIEN IMPORT import { GET } from '../Actions';

const search = (action) =>{
    action.payload.Map
}

export default (state = [], action) => {
  // console.log(state);
  // console.log("STATE", state);
  // console.log("Action", action);
  // console.log("MOVIES", typeof(action.payload));
  // console.log("MOVIES", action.payload);
  switch (action.type) {
    case GET:
      return action.payload;
    case GET:
      return search(action);
      // return action.payload;
    default: return state;
  }
}