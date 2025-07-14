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
        // console.log(data)
    })

function openTab(e, tabName) {
    // Declare all variables
    const tabcontentEls = Array.from(
        document.getElementsByClassName("tab-content")
    )
    const tablinksEls = Array.from(document.getElementsByClassName("tab-links"))
    // console.log(tabcontentEls);
    // console.log(tablinksEls);

    // Get all elements with class="tabcontent" and hide them
    tabcontentEls.forEach((tabContentEl) => {
        tabContentEl.style.display = "none"
    })

    // Get all elements with class="tablinks" and remove the class "active"
    tablinksEls.forEach((tabLinkEl) => {
        // console.log(tabLinkEl.classList);
        tabLinkEl.classList.remove("active")
    })

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block"
    if (e) {
        e.currentTarget.classList.add("active")
    } else {
        document.getElementById("default-btn").classList.add("active")
    }
}

openTab(undefined, "tab-1")
