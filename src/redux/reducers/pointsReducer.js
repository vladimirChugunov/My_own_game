import { pointsAT } from '../actionTypes/pointsAT'

const pointsInitialState = {
  score: 0,
}

function pointsReducer(state = pointsInitialState, action) {

  // eslint-disable-next-line default-case
  switch (action.type) {
    case pointsAT.ADD_POINTS:
      return {
        ...state,
        score: state.score += +action.payload,
      }
    case pointsAT.DECREASE_POINTS:
      return {
        ...state,
        score: state.score -= +action.payload,
      }

    default:
      return state;
  }
}

export default pointsReducer;
