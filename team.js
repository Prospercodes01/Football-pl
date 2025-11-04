const modal = document.getElementById("player-modal");
const modalName = document.getElementById("modal-name");
const modalPosition = document.getElementById("modal-position");
const modalStats = document.getElementById("modal-stats");
const modalPhoto = document.getElementById("modal-photo");
const closeModal = document.getElementById("close-modal");
const teams = {
  arsenal: {
    name: "Arsenal FC",
    color: "#EF0107",
    logo: "assets/logos/arsenal.png",
    squad: [
      { name: "Bukayo Saka", position: "Forward", stats: "Goals: 5", photo: "..." },
      { name: "Aaron Ramsdale", position: "Goalkeeper", stats: "Clean Sheets: 4", photo: "..." }
    ]
  },
  chelsea: {
    name: "Chelsea FC",
    color: "#034694",
    logo: "assets/logos/chelsea.png",
    squad: [
      { name: "Raheem Sterling", position: "Forward", stats: "Goals: 4", photo: "..." },
      { name: "Thiago Silva", position: "Defender", stats: "Clearances: 30", photo: "..." }
    ]
  },
  "man-city": {
    name: "Manchester City",
    color: "#6CABDD",
    logo: "assets/logos/man-city.png",
    squad: [
      { name: "Erling Haaland", position: "Striker", stats: "Goals: 10", photo: "..." },
      { name: "Ederson", position: "Goalkeeper", stats: "Clean Sheets: 5", photo: "..." }
    ]
  }
};

const teamSelect = document.getElementById("team-select");
const squadList = document.getElementById("squad-list");
const playerName = document.getElementById("player-name");
const playerPosition = document.getElementById("player-position");
const playerStats = document.getElementById("player-stats");
const playerPhoto = document.getElementById("player-photo");

function showPlayer(player) {
  modalName.textContent = player.name;
  modalPosition.textContent = `Position: ${player.position}`;
  modalStats.textContent = `Stats: ${player.stats}`;
  modalPhoto.src = player.photo;
  modal.style.display = "flex";
}

function renderSquad(squad) {
  squadList.innerHTML = "";
  squad.forEach(player => {
    const card = document.createElement("div");
    card.className = "player";
    card.textContent = player.name;
    card.addEventListener("click", () => showPlayer(player));
    squadList.appendChild(card);
  });
}

const teamLogo = document.getElementById("team-logo");
const teamName = document.getElementById("team-name");

function loadTeam(teamKey) {
  const team = teams[teamKey];
  teamLogo.src = team.logo;
  teamName.textContent = team.name;
  document.body.style.setProperty("--team-color", team.color);
  renderSquad(team.squad);
  showPlayer(team.squad[0]);
  localStorage.setItem("selectedTeam", teamKey);
}
const savedTeam = localStorage.getItem("selectedTeam") || "arsenal";
teamSelect.value = savedTeam;
loadTeam(savedTeam);
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});