
const pastries = [
    {
        name: "Macaroons",
        imgURL: "../media/macaroons.jpg"
    },
    {
        name: "Croissant",
        imgURL: "../media/croissant.jpg"
    },
    {
        name: "Cinnamon Roll",
        imgURL: "../media/cinnamonroll.jpg"
    },
    {
        name: "Cheesecake",
        imgURL: "../media/cheesecake.jpg"
    },
    {
        name: "Scones",
        imgURL: "../media/scones.jpg"
    },
    {
        name: "Cupcake",
        imgURL: "../media/cupcake.jpg"
    },
]

const menu = () => {
    const menuDiv = document.createElement("div")
    // menuDiv.classList.add("default-styling")
    menuDiv.classList.add("menu-styling")

    for (let i = 0; i < pastries.length; i++) {
        const image = document.createElement("img")
        const pastry = pastries[i]

        image.src = pastry.imgURL
        image.alt = pastry.name

        menuDiv.appendChild(image)
    }
    
    return menuDiv
}

export default menu