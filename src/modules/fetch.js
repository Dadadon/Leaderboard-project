import grabber from "./grabber";

const fetchLeaderboard = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const { result } = data;
  console.log(data);
  grabber("list-contents").innerHTML = "";
  // grabber("list-contents").classList = "border border-dark p-0";
  const container = document.createElement("ul");
  container.classList = "ps-3 pe-3";
  result.forEach((item) => {
    const element = document.createElement("li");
    element.classList = "d-flex justify-content-around";

    const userNameHolder = document.createElement("p");
    userNameHolder.innerText = item.user;

    const scoreHolder = document.createElement("p");
    scoreHolder.innerText = item.score;

    element.appendChild(userNameHolder);
    element.appendChild(scoreHolder);
    container.appendChild(element);
  });
  grabber("list-contents").appendChild(container);

};

export default fetchLeaderboard;
