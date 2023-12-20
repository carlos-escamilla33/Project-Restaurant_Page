
const about = () => {
    const aboutDiv = document.createElement("div")
    const aboutTitle = document.createElement("h1");
    const aboutDescription = document.createElement("p")
    const aboutImg = document.createElement("img")

    aboutImg.src = "../media/cheesecake.jpg"
    aboutImg.alt = "cheesecake"
    aboutDiv.classList.add("default-styling")
    aboutDiv.classList.add("card")

    aboutTitle.textContent = "About"
    aboutDescription.textContent = "Welcome to Pug & Puff, where passion meets pastry. Our shop is a haven of indulgence, showcasing exquisite treats crafted by skilled pastry chefs. From buttery croissants to velvety truffles, each creation is a celebration of flavor and finesse. Immerse yourself in the cozy ambiance, surrounded by the aroma of freshly brewed coffee. Life is too short to skip dessert – join us for a moment of sweet bliss."

    aboutDiv.appendChild(aboutTitle)
    aboutDiv.appendChild(aboutImg)
    aboutDiv.appendChild(aboutDescription)

    return aboutDiv
}

export default about;