const button = document.querySelector(".button");

const reaction = document.querySelector(".reaction-score p");
const memory = document.querySelector(".memory-score p");
const verbal = document.querySelector(".verbal-score p");
const visual = document.querySelector(".visual-score p");

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

const status = document.getElementById("status");

function loadResults() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      status.textContent = `Waiting results${".".repeat(i + 1)}`;
    }, i * 500);
  }

  i = 0;
}

// Add the loading GIF
status.innerHTML = `<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="Loading..." width="50px" height="50px">`;

button.addEventListener("click", () => {
  status.textContent = "";

  const reactionNumber = getRandomNumber();
  const memoryNumber = getRandomNumber();
  const verbalNumber = getRandomNumber();
  const visualNumber = getRandomNumber();

  let average =
    (reactionNumber + memoryNumber + verbalNumber + visualNumber) / 4;

  let roundedAverage = Math.round(average);

  document.querySelector(".top-result").textContent = roundedAverage;

  reaction.textContent = reactionNumber + " / 100";
  memory.textContent = memoryNumber + " / 100";
  verbal.textContent = verbalNumber + " / 100";
  visual.textContent = visualNumber + " / 100";

  const randomNumber = getRandomNumber();

  const resultText = `You scored higher than ${randomNumber}% of the people who have taken these tests.`;
  document.getElementById("result-text").textContent = resultText;

  if (randomNumber < 30) {
    document.getElementById("status").textContent = "Danger";

    const resultContainer = document.querySelector("section.result-container");
    resultContainer.style.background =
      "linear-gradient(190deg, #fd5959, #941515)";

    const totalNumbers = document.getElementById("total");
    if (document.getElementById("status").textContent === "Danger") {
      totalNumbers.style.background =
        "linear-gradient(190deg, #a42020, #be3030)";
    }
  } else if (randomNumber >= 60) {
    document.getElementById("status").textContent = "Great";

    const resultContainer = document.querySelector("section.result-container");
    resultContainer.style.background =
      "linear-gradient(190deg, #7759fd, #312cea)";

    const totalNumbers = document.getElementById("total");
    if (document.getElementById("status").textContent === "Great") {
      totalNumbers.style.background =
        "linear-gradient(to bottom, #4b21cb, #4d3ef1)";
    }
  } else {
    document.getElementById("status").textContent = "Caution";

    const resultContainer = document.querySelector("section.result-container");
    resultContainer.style.background =
      "linear-gradient(190deg, #ff9100, #ff5100)";

    const totalNumbers = document.getElementById("total");
    if (document.getElementById("status").textContent === "Caution") {
      totalNumbers.style.background =
        "linear-gradient(190deg, #ff5200, #ff6b00)";
    }
  }
});
