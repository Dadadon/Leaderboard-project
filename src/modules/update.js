const addScore = async (url, data) => {
  const post = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  await fetch(url, post);
  console.log(url);
};

export default addScore;
