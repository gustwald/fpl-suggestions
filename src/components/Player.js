import React from 'react';
import PropTypes from 'prop-types';

import price from '../img/price.svg';
import tag from '../img/tag.svg';
import goal from '../img/goal.svg';
import captain from '../img/captain.svg';
import warning from '../img/warning.svg';


const parsePrice = price => {
  const str = price.toString();
  const splittedPrice = str.split('');

  if (splittedPrice.length === 2) {
    splittedPrice.splice(1, 0, ',').join();
    return splittedPrice;
  }

  if (splittedPrice.length === 3) {
    splittedPrice.splice(2, 0, ',').join();
    return splittedPrice;
  }

  return price;
};

const getTwitter = name => {
  switch(name) {
    case 'Björn':
      return 'https://twitter.com/JohnsonBjorn';
    case 'Jesper':
      return 'https://twitter.com/hofmannjesper';
      case 'Gusten':
      return 'https://twitter.com/GustenDahlin';
    default:
     return 'https://twitter.com/fantasy_fantv';
  }
}

const Player = ({ players, isCaptain, isWarning }) => (
  <div className="players defenders">
    {players &&
      players.map(player => (
        <div key={player.id} className="playerWrapper">
        {isCaptain ? <img className="extra" src={captain} alt="captain" /> : null}
        {isWarning ? <img className="extra" src={warning} alt="warning" /> : null}
          <div className="imgWrapper">
            <img
              src={
                `img/p${player.photo.replace('jpg', 'png')}` ||
                `img/Photo-Missing.png`
              }
              alt="player"
            />
          </div>
          <div className="main-info">
            <span className="name">
              {player.first_name} {player.second_name}
            </span>
            <span className="club">{player.teamName}</span>
          </div>
          <div className="content">
            <span className="info">
              <img src={price} alt="price" />
              {parsePrice(player.now_cost)}m
            </span>
            <span className="info">
              <img src={tag} alt="selected" />
              {player.selected_by_percent}%{' '}
            </span>
            <span className="info">
              <img src={goal} alt="points" />
              {player.total_points}p{' '}
              <span className="ppg">&nbsp;({player.points_per_game}avg)</span>
            </span>
            <span className="info next-matches">
            {/* <img src={rightArrow} alt="next-matches" /> */}
              {player &&
                player.nextMatches &&
                player.nextMatches[0].map((d, i) => (
                  <span key={i}>
                    {i +1 }.{d.team}{d.home === true ? ' (h)' : ' (b)'}&nbsp;
                  </span>
                ))}
            </span>
          </div>
          <span className="suggestedBy">
              Rekommenderad av: <a href={getTwitter(player.suggestedBy)}>{player.suggestedBy}</a>
            </span>
        </div>
      ))}
  </div>
);

Player.defaultProps = {
  isCaptain: false,
  isWarning: false,
};

Player.propTypes = {
  isCaptain: PropTypes.bool,
  isWarning: PropTypes.bool,
};

export default Player;
