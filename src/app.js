//Progression 1 - create a Manager array and return it

let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  let managerarray = [managerName, managerAge, currentTeam, trophiesWon];
  return managerarray;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation) {
  let obj = {
    forward: formation[0],
    midfield: formation[1],
    defender: formation[2]
  }
  return obj;
}
//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let filtered = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      filtered[count++] = players[i];
    }
  }

  /*console.log(year);*/
  return (filtered);

}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let filtered = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].position === position) {
      filtered[count++] = players[i];
    }
  }

  return (filtered);

}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let filtered = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName)
        filtered[count++] = players[i];
    }
  }
  /*console.log(year);*/
  return (filtered);
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let filtered = [];
  let times = 0;
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        times++;
      }
    }
    if (times == noOfTimes) {
      filtered[count++] = players[i];
    }
  }
  /*console.log(year);*/
  return (filtered);
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxTimes(awardName, country) {
  let filtered = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if ((players[i].awards[j].name == awardName) && (players[i].country == country))
        filtered[count++] = players[i];
      break;
    }
  }
  return (filtered);
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let filtered = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].length; j++) {
      if ((players[i].awards.length >= noOfAwards) && (players[i].team) && (players[i].age <= age)) {
        filtered[count++] = players[i];
      }
    }
  }
  /*console.log(year);*/
  return (filtered);
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  let swap = {};
  for (let i = 0; i < players.length - 1; i++) {
    for (let j = 0; j < players.length - i - 1; j++) {
      if (players[j].age < players[j + 1].age) {
        swap = players[j];
        players[j] = players[j + 1];
        players[j + 1] = swap;

      }
    }
  }
  return(players);
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
/*Not working*/
function FilterByTeamxSortByNoOfAwards(team) {
  let count = 0;
  let filtered = {};
  let swap = {}
  for (let i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      filtered[count++] = players[i];
    }
  }

  for (let i = 0; i < filtered.length - 1; i++) {
    for (let j = 0; j < filtered.length - i - 1; j++) {
      if (filtered[j].awards.length < filtered[j + 1].awards.length) {
        swap = filtereds[j];
        filtered[j] = filtered[j + 1];
        filtered[j + 1] = swap;

      }
    }
  }
  console.log(filtered);

}

FilterByTeamxSortByNoOfAwards("Real Madrid");
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order