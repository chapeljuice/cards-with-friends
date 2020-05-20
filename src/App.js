import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, removePlayer } from './action-creators/actions';
import './App.css';

class App extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
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
    }
  }

  static getDerivedStateFromProps = ( props, state ) => {
    return {
      ...state,
      players: props.players
    }  
  }

  // startGame = (event) => {
  //   this.props.startGame();
  // }

  fewerPlayers = () => {
    const { players } = this.state;
    const numberOfPlayers = players.length;
    if ( numberOfPlayers > 1 ) {
      this.props.removePlayer();
    }
  }

  morePlayers = () => {
    this.props.addPlayer();
  }

  render () {
    const { players } = this.state;
    const numberOfPlayers = players.length;


    console.log('main state: ', this.state)

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Cards with friends!
          </p>
          <div className="player-count">
            <div><button onClick={this.fewerPlayers}>-</button><span>{ numberOfPlayers }</span><button onClick={this.morePlayers}>+</button></div>
            <p>{ numberOfPlayers > 1 ? 'Players' : 'Player' }</p>
          </div>
          <button onClick={this.startGame}>Play!</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log( 'mapStateToProps state: ', state );
  return {
   players: state.playerReducer.players
  };
};

 const mapDispatchToProps = dispatch => ({
  addPlayer: () => dispatch( addPlayer() ),
  removePlayer: () => dispatch( removePlayer() )
});

export default connect( mapStateToProps, mapDispatchToProps )(App);
