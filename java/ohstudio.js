const images = document.querySelectorAll("#image")
images.forEach((image) => {
    console.log(image)

    image.addEventListener('mouseover', (e) => {
        image.style.filter = "blur(8Px)"
    })
    image.addEventListener('mouseout', (e) => {
        image.style.filter = "none"
    })
})
