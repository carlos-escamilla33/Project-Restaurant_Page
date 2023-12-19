
const pastries = [
    {
        name: "Macaroons",
        img: "../media/macaroons.jpg"
    },
    {
        name: "Croissant",
        img: "../media/croissant.jpg"
    },
    {
        name: "Cinnamon Roll",
        img: "../media/cinnamonroll.jpg"
    },
    {
        name: "Cheesecake",
        img: "../media/cheesecake.jpg"
    },
    {
        name: "Scones",
        img: "../media/scones.jpg"
    },
]

const menu = () => {
    const menuDiv = document.createElement("div")
    menuDiv.classList.add("default-styling")
    
    return menuDiv
}

export default menu