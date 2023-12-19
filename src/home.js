import navBar from "./navbar"

const home = () => {
    const homeDiv = document.createElement("div")
    const shopName = document.createElement("h1")
    const welcomeMsg = document.createElement("p")
    const pugRollDiv = document.createElement("div")
    const pugRollImg = document.createElement("img")
    const welcomeDiv = document.createElement("div")

    pugRollImg.src = "../media/pugroll.jpeg"
    pugRollImg.alt = "Clip Art of Pug Buns"
    welcomeDiv.setAttribute("class", "welcome-container")
    homeDiv.setAttribute("id", "home-container")
    pugRollDiv.setAttribute("class", "pugRollDiv")

    pugRollDiv.appendChild(pugRollImg)

    welcomeMsg.textContent = "Welcome to"
    shopName.textContent = "Pug & Puff"
    welcomeDiv.appendChild(welcomeMsg)
    welcomeDiv.appendChild(shopName)
    welcomeDiv.append(pugRollDiv)

    homeDiv.appendChild(navBar())
    homeDiv.appendChild(welcomeDiv)

    return homeDiv
}

export default home