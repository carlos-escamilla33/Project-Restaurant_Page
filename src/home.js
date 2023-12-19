
const home = () => {
    const homeDiv = document.createElement("div")
    const navBar = document.createElement("div")
    const title = document.createElement("h1")
    const homeTab = document.createElement("button")
    const menuTab = document.createElement("button")
    const aboutTab = document.createElement("button")
    const tabArr = [homeTab, menuTab, aboutTab]

    for (let i = 0; i < tabArr.length; i++) {
        const currTab = tabArr[i]
        currTab.setAttribute("class", "tab-btn")
    }

    homeDiv.setAttribute("id", "home-container")
    navBar.setAttribute("id", "navbar")
    homeTab.textContent = "Home"
    menuTab.textContent = "Menu"
    aboutTab.textContent = "About"

    navBar.appendChild(homeTab)
    navBar.appendChild(menuTab)
    navBar.appendChild(aboutTab)
    homeDiv.appendChild(navBar)

    title.textContent = "Pug & Puff"
    homeDiv.appendChild(title)

    return homeDiv
}

export default home