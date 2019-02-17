import suggestedDefenders from './suggested/defenders.json';
import suggestedMidfielders from './suggested/midfielders.json';
import suggestedStrikers from './suggested/strikers.json';
import suggestedCaptains from './suggested/captains.json';
import suggestedWarnings from './suggested/warnings.json';
import teams from './teams.json';

import data from './players.json';

export function parsedPlayers() {

      const players = data && data;
      // Defenders
      const firstNameDefenders = suggestedDefenders.map(s => s.fName);
      const secondNameDefenders = suggestedDefenders.map(s => s.lName);
      const defenders = players
        .filter(
          f =>
            firstNameDefenders.includes(f.first_name) &&
            secondNameDefenders.includes(f.second_name),
        )
        .map(p =>
          Object.assign(p, {
            nextMatches: suggestedDefenders
              .filter(s => s.fName === p.first_name && s.lName === p.second_name)
              .map(s => s.nextMatches),
          }, {
            //fix this crap
            suggestedBy: suggestedDefenders
              .filter(s => s.fName === p.first_name && s.lName === p.second_name)
              .map(s => s.suggestedBy),
          },{
            teamName: teams
            .filter(s => s.teamCode === p.team_code)
            .map(s => s.teamName),
          }),
        );
  
      // Midfielders
      const firstNameMidfielders = suggestedMidfielders.map(s => s.fName);
      const secondNameMidfielders = suggestedMidfielders.map(s => s.lName);
      const midfielders = players
        .filter(
          f =>
            firstNameMidfielders.includes(f.first_name) &&
            secondNameMidfielders.includes(f.second_name),
        )
        .map(p =>
          Object.assign(p, {
            nextMatches: suggestedMidfielders
              .filter(s => s.fName === p.first_name && s.lName === p.second_name)
              .map(s => s.nextMatches),
          }, {
            suggestedBy: suggestedMidfielders
            .filter(s => s.fName === p.first_name && s.lName === p.second_name)
            .map(s => s.suggestedBy),
          },{
            teamName: teams
            .filter(s => s.teamCode === p.team_code)
            .map(s => s.teamName),
          }),
        );
  
      // Strikers
      const firstNameStrikers = suggestedStrikers.map(s => s.fName);
      const secondNameStrikers = suggestedStrikers.map(s => s.lName);
      const strikers = players
        .filter(
          f =>
            firstNameStrikers.includes(f.first_name) &&
            secondNameStrikers.includes(f.second_name),
        )
        .map(p =>
          Object.assign(p, {
            nextMatches: suggestedStrikers
              .filter(s => s.fName === p.first_name && s.lName === p.second_name)
              .map(s => s.nextMatches),
          }, {
            suggestedBy: suggestedStrikers
            .filter(s => s.fName === p.first_name && s.lName === p.second_name)
            .map(s => s.suggestedBy),
          },{
            teamName: teams
            .filter(s => s.teamCode === p.team_code)
            .map(s => s.teamName),
          }),
        );
  
      // CAptains
      const firstNameCaptains = suggestedCaptains.map(s => s.fName);
      const secondNameCaptains = suggestedCaptains.map(s => s.lName);
      const captains = players
        .filter(
          f =>
            firstNameCaptains.includes(f.first_name) &&
            secondNameCaptains.includes(f.second_name),
        )
        .map(p =>
          Object.assign(p, {
            nextMatches: suggestedCaptains
              .filter(s => s.fName === p.first_name && s.lName === p.second_name)
              .map(s => s.nextMatches),
          }, {
            suggestedBy: suggestedCaptains
            .filter(s => s.fName === p.first_name && s.lName === p.second_name)
            .map(s => s.suggestedBy),
          },
          {
            teamName: teams
            .filter(s => s.teamCode === p.team_code)
            .map(s => s.teamName),
          }),
        );
  
      // Warnings
      const firstNameWarnings = suggestedWarnings.map(s => s.fName);
      const secondNameWarnings = suggestedWarnings.map(s => s.lName);
      const warnings = players
        .filter(
          f =>
            firstNameWarnings.includes(f.first_name) &&
            secondNameWarnings.includes(f.second_name),
        )
        .map(p =>
          Object.assign(p, {
            nextMatches: suggestedWarnings
              .filter(s => s.fName === p.first_name && s.lName === p.second_name)
              .map(s => s.nextMatches),
          }, {
            suggestedBy: suggestedWarnings
            .filter(s => s.fName === p.first_name && s.lName === p.second_name)
            .map(s => s.suggestedBy),
          },
          {
            teamName: teams
            .filter(s => s.teamCode === p.team_code)
            .map(s => s.teamName),
          }
          ),
        );
      return { defenders, midfielders, strikers, captains, warnings };
}