fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&count=20"
)
    .then((res) => res.json())
    .then((data) => {
        const imgEls = document.querySelectorAll("img")
        imgEls.forEach((imgEl, index) => {
            imgEl.src = data[index].urls.regular
        })
    })

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then((res) => res.json())
    .then((data) => {
        const fullparagraphEls = document.querySelectorAll(".full-paragraph")
        const slicedParagraphEls = document.querySelectorAll(".sliced-paragraph")
        fullparagraphEls.forEach((paragraphEl, index) => {
            paragraphEl.textContent = data[index].body
        })
        slicedParagraphEls.forEach((paragraphEl, index) => {
            paragraphEl.textContent = data[index].body.slice(0, 50) + "..."
        })
    })

