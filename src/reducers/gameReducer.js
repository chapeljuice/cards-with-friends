export default (state = { gameStarted: false }, action) => {
  switch (action.type) {

    case 'START_GAME':
      console.log( 'START_GAME state: ', state );
      console.log( 'START_GAME action.payload: ', action.payload );
      return {
        ...state,
        gameStarted: action.payload
      }

    default:
      return state
    }
}