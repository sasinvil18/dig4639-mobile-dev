import Card from "./components/Card/index.js" // TODO: Replace this with the correct import statement
function runOnLoad()
{
    // Create a container for us
    let element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    let newCard = new Card({content:"Sample value provided"});
    element.appendChild(newCard.render());
}
window.addEventListener("DOMContentLoaded", runOnLoad);