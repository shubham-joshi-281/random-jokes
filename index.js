const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#joke_btn");

const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com/", setHeader);
    const data = await res.json();
    joke.innerHTML = data.joke;
  } catch (e) {
    console.log(`error is ${e}`);
  }
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
