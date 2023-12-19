
const navBar = () => {
    const navBar = document.createElement("div")
    const homeTab = document.createElement("button")
    const menuTab = document.createElement("button")
    const aboutTab = document.createElement("button")
    const tabArr = [homeTab, menuTab, aboutTab]

    for (let i = 0; i < tabArr.length; i++) {
        const currTab = tabArr[i]
        currTab.setAttribute("class", "tab-btn")
    }

    navBar.setAttribute("id", "navbar")
    homeTab.textContent = "Home"
    menuTab.textContent = "Menu"
    aboutTab.textContent = "About"

    navBar.appendChild(homeTab)
    navBar.appendChild(menuTab)
    navBar.appendChild(aboutTab)

    return navBar
}

export default navBar