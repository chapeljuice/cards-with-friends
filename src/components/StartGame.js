import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, removePlayer, startGame } from './../action-creators/actions';

class StartGame extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      gameStarted: false,
      players: this.props.players
    }
  }

 startGame = () => {
    this.props.startGame();
  }

  static getDerivedStateFromProps = ( props, state ) => {
    console.log( 'StartGame getDerivedStateFromProps props: ', props );
    return {
      ...state,
      gameStarted: props.gameStarted,
      players: props.players
    }  
  }
  
  fewerPlayers = () => {
    const { players } = this.state;
    const numberOfPlayers = players.length;
    if ( numberOfPlayers > 1 ) {
      this.props.removePlayer();
    }
  }
  
  morePlayers = () => {
    const { players } = this.state;
    const numberOfPlayers = players.length;
    if ( numberOfPlayers < 10 ) {
      this.props.addPlayer();
    }
  }

  render () {
    const { players } = this.state;
    const numberOfPlayers = players.length;
    return (
      <div>
        <div className="player-count">
          <div><button onClick={this.fewerPlayers}>-</button><span>{ numberOfPlayers }</span><button onClick={this.morePlayers}>+</button></div>
          <p>{ numberOfPlayers > 1 ? 'Players' : 'Player' }</p>
        </div>
        <button onClick={this.startGame}>Play!</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log( 'mapStateToProps state: ', state );
  return {
    gameStarted: state.gameReducer.gameStarted,
    players: state.playerReducer.players
  };
};

 const mapDispatchToProps = dispatch => ({
  addPlayer: () => dispatch( addPlayer() ),
  startGame: () => dispatch( startGame() ),
  removePlayer: () => dispatch( removePlayer() )
});

export default connect( mapStateToProps, mapDispatchToProps )(StartGame);