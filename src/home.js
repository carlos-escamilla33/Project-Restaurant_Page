
const home = () => {
    const homeDiv = document.createElement("div")
    homeDiv.setAttribute("id", "home-container")

    const menuDiv = document.createElement("div")
    menuDiv.setAttribute("id", "menu")
    homeDiv.appendChild(menuDiv)

    const h1 = document.createElement("h1")
    h1.textContent = "Pug & Puff"
    homeDiv.appendChild(h1)


    



    

    return homeDiv
}

export default home