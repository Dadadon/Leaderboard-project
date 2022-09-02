import fetchLeaderboard from "./fetch";

const reload = (apiUrl) => {
  console.log(apiUrl);
  fetchLeaderboard(apiUrl);
};
export default reload;
