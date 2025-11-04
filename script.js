const newsItems = [
  "Manchester United signs new striker.",
  "Liverpool prepares for derby clash.",
  "Premier League announces new fixture schedule.",
];

const newsList = document.getElementById("news-list");

newsItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  newsList.appendChild(li);
});
const leagueData = [
  { team: "Manchester City", played: 10, won: 8, drawn: 1, lost: 1, points: 25 },
  { team: "Arsenal", played: 10, won: 7, drawn: 2, lost: 1, points: 23 },
  { team: "Liverpool", played: 10, won: 6, drawn: 3, lost: 1, points: 21 },
  { team: "Tottenham", played: 10, won: 6, drawn: 2, lost: 2, points: 20 },
  { team: "Chelsea", played: 10, won: 5, drawn: 2, lost: 3, points: 17 },
];

const tableBody = document.getElementById("table-body");

leagueData.forEach((team, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${team.team}</td>
    <td>${team.played}</td>
    <td>${team.won}</td>
    <td>${team.drawn}</td>
    <td>${team.lost}</td>
    <td>${team.points}</td>
  `;
  tableBody.appendChild(row);
});
const squad = [
  "Aaron Ramsdale (GK)",
  "Ben White (DF)",
  "William Saliba (DF)",
  "Declan Rice (MF)",
  "Martin Ødegaard (MF)",
  "Bukayo Saka (FW)",
  "Gabriel Jesus (FW)"
];

const fixtures = [
  "Arsenal vs Man City — Nov 12",
  "Arsenal vs Brighton — Nov 18",
  "Arsenal vs Newcastle — Nov 25"
];

const squadList = document.getElementById("squad-list");
const fixtureList = document.getElementById("fixture-list");

squad.forEach(player => {
  const li = document.createElement("li");
  li.textContent = player;
  squadList.appendChild(li);
});

fixtures.forEach(match => {
  const li = document.createElement("li");
  li.textContent = match;
  fixtureList.appendChild(li);
});
const teams = {
  arsenal: {
    player: "Bukayo Saka",
    position: "Forward",
    stats: "Goals: 5, Assists: 3",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bukayo_Saka_2022.jpg/220px-Bukayo_Saka_2022.jpg"
  },
  chelsea: {
    player: "Raheem Sterling",
    position: "Forward",
    stats: "Goals: 4, Assists: 2",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Raheem_Sterling_2021.jpg/220px-Raheem_Sterling_2021.jpg"
  },
  "man-city": {
    player: "Erling Haaland",
    position: "Striker",
    stats: "Goals: 10, Assists: 1",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Erling_Haaland_2023.jpg/220px-Erling_Haaland_2023.jpg"
  }
};

const teamSelect = document.getElementById("team-select");
const playerName = document.getElementById("player-name");
const playerPosition = document.getElementById("player-position");
const playerStats = document.getElementById("player-stats");
const playerPhoto = document.getElementById("player-photo");

function updatePlayerCard(teamKey) {
  const team = teams[teamKey];
  playerName.textContent = team.player;
  playerPosition.textContent = `Position: ${team.position}`;
  playerStats.textContent = `Stats: ${team.stats}`;
  playerPhoto.src = team.photo;
}

teamSelect.addEventListener("change", (e) => {
  updatePlayerCard(e.target.value);
});

// Load default
updatePlayerCard("arsenal");