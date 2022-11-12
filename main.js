const firstJoke =
  "I was wondering why the baseball was getting bigger. Then it hit me.";
const secondJoke =
  "Once you've seen one shopping center, you've seen the mall.";
const thirdJoke = "What’s more amazing than a talking dog? A spelling bee.";
const header = "My jokes";

let text = `<h1>${header}</h1>
        <li>${firstJoke}</li>
        <li>${secondJoke}</li>
        <li>${thirdJoke}</li>`;

document.getElementById("mainArea").innerHTML = text;

const p = document.createElement("p");
p.textContent = "That's all folks!";

document.body.appendChild(p);
