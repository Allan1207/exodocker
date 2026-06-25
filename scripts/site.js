const body = document.getElementById("body")

let visible = false

setInterval(() => {
    visible = !visible
    if (visible) {
        body.classList.add("vert")
    } else {
        body.classList.remove("vert")
    }
}, 2000)