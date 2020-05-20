export const addPlayer = () => dispatch => {
  dispatch({
    type: 'ADD_PLAYER',
    payload: {
      cards: [],
      bigBblind: false,
      smallBlind: false,
      currentBet: 0,
      betThisHand: 0,
      dealerButton: false
    }
  })
 };

 export const removePlayer = () => dispatch => {
  dispatch({
    type: 'REMOVE_PLAYER'
  })
 };