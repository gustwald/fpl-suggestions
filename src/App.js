import React, { Component, Fragment } from 'react';
import Player from './components/Player';

import pitch from './img/pitch.png';


import { parsedPlayers } from './funcs';
import './style/App.scss';

class App extends Component {
  state = {
    players: {},
    visibleView: 'defenders',
  };

  componentDidMount() {
    const players = parsedPlayers();
    this.setState({ players });
  }

  selecteView(view) {
    this.setState({ visibleView: view });
  }

  render() {
    console.log(this.state);

    const { players, visibleView } = this.state;
    const { defenders, midfielders, strikers, captains, warnings } = players;
    return (
      <div className="App">
        <h2 className="heading">Gameweek 27</h2>
        <nav className="nav">
          <div className={visibleView === 'defenders' ? 'selected' : ''} onClick={() => this.selecteView('defenders')}>
            Backar
          </div>
          <div className={visibleView === 'midfielders' ? 'selected' : ''} onClick={() => this.selecteView('midfielders')}>
            Mittfältare
          </div>
          <div className={visibleView === 'strikers' ? 'selected' : ''} onClick={() => this.selecteView('strikers')}>
            Anfallare
          </div>
          <div className={visibleView === 'captains' ? 'selected' : ''} onClick={() => this.selecteView('captains')}>Kaptener</div>
          <div className={visibleView === 'warnings' ? 'selected' : ''} onClick={() => this.selecteView('warnings')}>Varningsflaggor</div>
        </nav>
        <div style={{ backgroundImage: `url(${pitch})` }} className="pitch">
          <div>
            {visibleView === 'defenders' && (
              <Fragment>
                <Player players={defenders} />
              </Fragment>
            )}
            {visibleView === 'midfielders' && (
              <Fragment>
                <Player players={midfielders} />
              </Fragment>
            )}
            {visibleView === 'strikers' && (
              <Fragment>
                <Player players={strikers} />
              </Fragment>
            )}
            {visibleView === 'captains' && (
              <Fragment>
                <Player players={captains} isCaptain={true} />
              </Fragment>
            )}
            {visibleView === 'warnings' && (
              <Fragment>
                <Player players={warnings} isWarning={true} />
              </Fragment>
            )}
          </div>
        </div>
        <span className="madeBy">by <a href="https://github.com/gustwald">gustwald</a></span>
      </div>
    );
  }
}

export default App;
