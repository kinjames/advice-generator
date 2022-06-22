// Selectors
const generate = document.querySelector(".dice");
const idNum = document.getElementById("advice-num");
const adviceText = document.getElementById("advice");

// Event Listeners
generate.addEventListener("click", update);
window.addEventListener("DOMContentLoaded", () => {
    update();
  });

// Functions
async function fetchApi(){
    const dataFetch = await fetch("https://api.adviceslip.com/advice", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const data = await dataFetch.json();
    return data;
}

async function update(){
    const data = await fetchApi();
    idNum.textContent = data.slip.id;
    adviceText.textContent  = data.slip.advice;
}