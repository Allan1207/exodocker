const body = document.querySelector("h1")

let visible = false

setInterval(() => {
    visible = !visible
    if (visible) {
        body.classList.add("vert")
    } else {
        body.classList.remove("vert")
    }
}, 2000)