function toggleLocationMenu() {
  document.getElementById("locationOptions").classList.toggle("hidden");
}

function switchLocation(day) {
  const locations = {
    thursday:    "https://badmintonleague.github.io/pickering/leaderboard.html",
    monday: "https://badmintonleague.github.io/scarborough/leaderboard.html",
  };

  if (locations[day]) {
    window.location.href = locations[day];
  }
}
