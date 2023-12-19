import home from "./home";
import menu from "./menu";
import navBar from "./navbar";

const contentDiv = document.getElementById("content");
const mainDiv = document.createElement("div")
mainDiv.setAttribute("id", "main-container")

contentDiv.appendChild(navBar())
mainDiv.appendChild(menu()) // default content DONT FORGET TO CHNAGE THIS BACK TO HOME
contentDiv.appendChild(mainDiv)

const navbarBtns = document.querySelectorAll("#navbar .tab-btn")

navbarBtns.forEach((navbtn) => {
    navbtn.addEventListener("click", (e) => {
        e.preventDefault()
        const selectedPage = e.target.textContent
        mainDiv.innerText = ""
        if (selectedPage === "Home") {
            mainDiv.appendChild(home())
        } else if (selectedPage === "Menu") {
            mainDiv.appendChild(menu())
        } 
        
    })
})