const gameObject = () => {
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: 'Black, White',
      players: {
        'Alan Anderson': {
          number: '0',
          shoe: '16',
          points: '22',
          rebounds: '12',
          assists: '12',
          steals: '3',
          blocks: '1',
          slamDunks: '1',
        },
        'Reggie Evans': {
          number: '30',
          shoe: '14',
          points: '12',
          rebounds: '12',
          assists: '12',
          steals: '12',
          blocks: '12',
          slamDunks: '7',
        },
        'Brook Lopez': {
          number: '11',
          shoe: '17',
          points: '17',
          rebounds: '19',
          assists: '10',
          steals: '3',
          blocks: '1',
          slamDunks: '15',
        },
        'Mason Plumlee': {
          number: '1',
          shoe: '19',
          points: '26',
          rebounds: '12',
          assists: '6',
          steals: '3',
          blocks: '8',
          slamDunks: '5',
        },
        'Jason Terry': {
          number: '31',
          shoe: '15',
          points: '19',
          rebounds: '2',
          assists: '2',
          steals: '4',
          blocks: '11',
          slamDunks: '1',
        },
      },
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: 'Turqoise, Purple',
      players: {
        'Jeff Adrien': {
          number: '4',
          shoe: '18',
          points: '10',
          rebounds: '1',
          assists: '1',
          steals: '2',
          blocks: '7',
          slamDunks: '2',
        },
        'Bismak Biyombo': {
          number: '0',
          shoe: '16',
          points: '12',
          rebounds: '4',
          assists: '7',
          steals: '7',
          blocks: '15',
          slamDunks: '10',
        },
        'DeSagna Diop': {
          number: '2',
          shoe: '14',
          points: '24',
          rebounds: '12',
          assists: '12',
          steals: '4',
          blocks: '5',
          slamDunks: '5',
        },
        'Ben Gordon': {
          number: '8',
          shoe: '15',
          points: '33',
          rebounds: '3',
          assists: '2',
          steals: '1',
          blocks: '1',
          slamDunks: '0',
        },
        'Brendan Haywood': {
          number: '33',
          shoe: '15',
          points: '6',
          rebounds: '12',
          assists: '12',
          steals: '22',
          blocks: '5',
          slamDunks: '12',
        },
      },
    },
  };
};

const homeTeamName = () => {
  return gameObject()['home']['teamName'];
};

const getPlayer = (playerName) => {
  const gameObj = gameObject();
  for (const team in gameObj) {
    const players = gameObj[team].players;
    if (playerName in players) {
      return players[playerName];
    }
  }
  return 'Player not found';
};

const getAllPlayers = (withNames = false) => {
  const gameObj = gameObject();
  const players = [];
  for (const team in gameObj) {
    const teamPlayers = gameObj[team].players;
    for (const playerName in teamPlayers) {
      const playerStats = teamPlayers[playerName];
      if (withNames) {
        players.push({ playerName: playerName, ...playerStats });
      } else {
        players.push(playerStats);
      }
    }
  }
  return players;
};

const numPointsScored = (playerName) => {
  return getPlayer(playerName).points;
};

const shoeSize = (playerName) => {
  return getPlayer(playerName).shoe;
};

const findTeamObj = (teamName) => {
  const gameObj = gameObject();
  for (const team in gameObj) {
    if (gameObj[team].teamName === teamName) {
      return gameObj[team];
    }
  }
  return 'Team Not Found';
};

const teamColors = (teamName) => {
  return findTeamObj(teamName).colors;
};

const playerNumbers = (teamName) => {
  const playersObj = findTeamObj(teamName).players;
  return Object.values(playersObj).map((player) => player.number);
};

const playerStats = (playerName) => {
  return getPlayer(playerName);
};

const bigShoeRebounds = () => {
  const allPlayersStats = getAllPlayers();
  let biggestShoe = 0;
  let biggestShoeRebounds = 0;
  for (const player of allPlayersStats) {
    if (player.shoe > biggestShoe) {
      biggestShoe = player.shoe;
      biggestShoeRebounds = player.rebounds;
    }
  }
  return biggestShoeRebounds;
};

const mostPoints = () => {
  const playersArray = getAllPlayers((withNames = true));
  let name = '';
  let pointsScored = 0;
  for (const player of playersArray) {
    if (parseInt(player.points) > pointsScored) {
      name = player.playerName;
      pointsScored = player.points;
    }
  }
  return name;
};

const winningTeam = () => {
  const gameObj = gameObject();
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;
  let winningTeam = '';
  for (const player of Object.values(gameObj.home.players)) {
    homeTeamPoints += parseInt(player.points);
  }
  for (const player of Object.values(gameObj.away.players)) {
    awayTeamPoints += parseInt(player.points);
  }
  if (homeTeamPoints > awayTeamPoints) {
    return gameObj.home.teamName;
  } else if (awayTeamPoints > homeTeamPoints) {
    return gameObj.away.teamName;
  } else {
    return 'It was a tie!';
  }
};

const playerWithLongestName = () => {
  const playersObj = getAllPlayers((withName = true));
  let longestName = '';
  for (const player of playersObj) {
    if (player.playerName.length > longestName.length) {
      longestName = player.playerName;
    }
  }
  return longestName;
};

const doesLongNameStealATon = () => {
  const longestNamePlayer = playerWithLongestName();
  const playerObj = getAllPlayers((withName = true));
  const mostSteals = 0;
  const longestNamePlayerSteals = getPlayer(longestNamePlayer).steals;
  for (const player of playerObj) {
    if (parseInt(player.steals) > longestNamePlayerSteals) {
      return false;
    }
  }
  return true;
};
