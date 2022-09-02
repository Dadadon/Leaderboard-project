import _ from "lodash";
import "./style.css";
import grabber from "./modules/grabber.js";
import addScore from "./modules/update.js";
import reload from "./modules/ui";

const form = document.forms["leaderboardForm"];
const apiUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WU0ylLObsEcjpaUaHSJ4/scores";

grabber("submit").addEventListener("click", () => {
  console.log("pressed");
  if (form.userName.value === "") {
    alert("Please add text");
  } else {
    const userName = form.userName.value;
    const score = form.score.value;

    const data = {
      user: userName,
      score: score,
    };
    addScore(apiUrl, data);
    reload(apiUrl);
  }
});

grabber("refresh").addEventListener("click", () => {
  reload(apiUrl);
});

reload(apiUrl);
