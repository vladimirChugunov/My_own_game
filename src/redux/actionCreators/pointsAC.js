import { pointsAT } from '../actionTypes/pointsAT';

export const addPointsAC = (payload) => {
  return {
    type: pointsAT.ADD_POINTS,
    payload
  }
}

export const decreasePointsAC = (payload) => {
  return {
    type: pointsAT.DECREASE_POINTS,
    payload
  }
}
