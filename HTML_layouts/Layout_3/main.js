const scrollContainer = document.querySelector(".gallery")
const backBtn = document.getElementById("backBtn")
const nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", e => {
    e.preventDefault()
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollLeft += e.deltaY
})

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollLeft += 900
})

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollLeft -= 900
})