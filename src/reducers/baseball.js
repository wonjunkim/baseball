import { REGISTER_NUMBER } from '../actions/baseball.js';

const initialState = {
  gameNumber: [],
  attackNumber: []

}

const baseball = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_NUMBER:
      return {
        ...state,
        attackNumber: state.gameNumber,
        gameNumber: [],
      }
      
    default:
      return state;
  }
}

export default baseball;