const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const twentyFourteen = fifaData.filter(function(item){
    return item.Year == 2014;
});
console.log(twentyFourteen);
const twentyFourteenFinal = twentyFourteen.filter(function(item){
    return item.Stage == "Final";
});
console.log(twentyFourteenFinal);

//(a) Home Team name for 2014 world cup final
console.log(twentyFourteenFinal[0]['Home Team Name']);
//(b) Away Team name for 2014 world cup final
console.log(twentyFourteenFinal[0]['Away Team Name']);
//(c) Home Team goals for 2014 world cup final
console.log(twentyFourteenFinal[0]['Home Team Goals']);
//(d) Away Team goals for 2014 world cup final
console.log(twentyFourteenFinal[0]['Away Team Goals']);
//(e) Winner of 2014 world cup final */
if(twentyFourteenFinal[0]['Home Team Goals'] > twentyFourteenFinal[0]['Away Team Goals']){
    console.log(twentyFourteenFinal[0]['Home Team Name'])
}
else if(twentyFourteenFinal[0]['Home Team Goals'] < twentyFourteenFinal[0]['Away Team Goals']){
    console.log(twentyFourteenFinal[0]['Away Team Name'])
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(array){
   const finals = array.filter(function(item){
       return item.Stage == 'Final';
   })
   return finals;
}
getFinals(fifaData);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, getFinals) {
    const finals = getFinals(array);
    const years = finals.map(function(item){
        return item.Year;
    });
    return years;
}
getYears(fifaData, getFinals);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, getFinals) {
    const finals = getFinals(array);
    const winners = [];
    finals.forEach(function(item){
        if(item['Home Team Goals'] > item['Away Team Goals']){
            winners.push(item['Home Team Name']);
        }
        else{
            winners.push(item['Away Team Name']);
        }
    })
    return winners;
}
getWinners(fifaData, getFinals);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, getYears, getWinners){
    const years = getYears(array, getFinals);
    const winners = getWinners(array, getFinals);
    const winnersByYear = [];
    for(let i = 0; i < winners.length; i++){
        winnersByYear.push("In " + years[i] + ", " + winners[i] + " won the world cup!");
    }
    return winnersByYear;
}
getWinnersByYear(fifaData, getYears, getWinners);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(getFinals) {
   const finals = getFinals;
   const goals = finals.reduce(function(acc, item){
       return acc + item['Home Team Goals'] + item['Away Team Goals'];
   },0);
   const averageGoals = Math.round((goals / finals.length) * 100) / 100;
   const averageGoalsString = "" + averageGoals;
   return averageGoalsString;
}
getAverageGoals(getFinals(fifaData));

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
