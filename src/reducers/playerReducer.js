export default (state = {
  activePlayer: 0,
  bestCurrentPlayer: -1,
  bestCurrentHand: -1,
  communityCards: [],
  players: [
    {
      cards: [],
      bigBlind: false,
      smallBlind: false,
      currentBet: 0,
      betThisHand: 0,
      dealerButton: true
    }
  ],
  potSize: 0,
  loading: false,
  errors: []
}, action) => {
  switch (action.type) {

    case 'ADD_PLAYER':
      return {
        ...state,
        players: [
          ...state.players,
          action.payload
        ]
      }

    case 'REMOVE_PLAYER':
      return {
        ...state,
        players: [
          ...state.players.slice(0, state.players.length - 1),
          ...state.players.slice(state.players.length)
        ]
      }

    default:
      return state
    }
}