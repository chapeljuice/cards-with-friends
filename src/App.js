import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from './action-creators/actions';
import StartGame from './components/StartGame';
import './App.css';

class App extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      activePlayer: 0,
      bestCurrentPlayer: -1,
      bestCurrentHand: -1,
      communityCards: [],
      gameStarted: false,
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
    }
  }

  static getDerivedStateFromProps = ( props, state ) => {
    return {
      ...state,
      gameStarted: props.gameStarted
    }  
  }

  render () {
    const { players, gameStarted } = this.state;
    const numberOfPlayers = players.length;
    const gameDisplay = gameStarted ? <div>Game started</div> : <StartGame numberOfPlayers={ numberOfPlayers } />;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Cards with friends!
          </p>
          { gameDisplay }
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameStarted: state.gameReducer.gameStarted,
    players: state.playerReducer.players
  };
};

 const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch( startGame() )
});

export default connect( mapStateToProps, mapDispatchToProps )(App);
