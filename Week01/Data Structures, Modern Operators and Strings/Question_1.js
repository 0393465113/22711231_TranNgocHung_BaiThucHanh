const game = { 
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

var players1 = game.players[0];
var players2 = game.players[1]; 

var gk = players1[0];
var fieldPlayers = players1.slice(1);

var allPlayers = [...players1, ...players2];

var players1Final = players1.concat('Thiago','Coutinho','Perisic');

var {team1, x: draw, team2} = game.odds;

function printGoals(... players){
    console.log(`${players.length} goals were scored.`);
    players.forEach(player => console.log(player));
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

var moreLikely = team1 < team2 ? game.team1 : game.team2;
console.log(`${moreLikely} is more likely to win.`);