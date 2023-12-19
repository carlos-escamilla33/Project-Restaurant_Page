import home from "./home";
const contentDiv = document.getElementById("content");
contentDiv.appendChild(home())

// here we add an event listener to buttons or divs
// the eventlistener will take the buttons and listen for a click, 
// we will then add the pageLoader function with the appropriate tab to be rendered based off the value