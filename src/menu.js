
const pastries = [
    {
        name: "Macaroons",
        description: "Colorful almond cookies, crisp outside, chewy inside, various fillings"
    },
    {
        name: "Croissants",
        description: "Flaky, buttery French pastry, crescent-shaped, perfect for breakfast"
    },
    {
        name: "Cinnamon Rolls",
        description: "Sweet rolled pastry, cinnamon-sugar filling, topped with glaze or frosting"
    },
    {
        name: "Cheesecake",
        description: "Creamy dessert with sweetened cream cheese filling, often baked"
    },
    {
        name: "Scones",
        description: "British pastry, tender and sweet, often with fruit or nuts"
    },
    {
        name: "Cupcakes",
        description: "Individual cake in a cup, various flavors, topped with frosting"
    },
]

const menu = () => {
    const menuDiv = document.createElement("div")
    const menuTitle = document.createElement("h1")
    menuDiv.classList.add("default-styling")
    menuDiv.classList.add("menu-styling")

    menuTitle.textContent = "Menu"
    menuDiv.appendChild(menuTitle)

    for (let i = 0; i < pastries.length; i++) {
        const card = document.createElement("div")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")

        const title = pastries[i].name
        const description = pastries[i].description

        h3.textContent = title
        p.textContent = description

        card.appendChild(h3)
        card.appendChild(p)


        card.classList.add("card")

        menuDiv.appendChild(card)
    }
    
    return menuDiv
}

export default menu