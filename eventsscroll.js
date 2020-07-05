let selector = e => document.querySelector(e)

window.addEventListener("scroll", event => {
        if (window.innerWidth > 568) {
            // setTimeout(() => {
            //     history.go()
            // }, 500)
            selector(".left_box").style.position = "fixed"
        }

    })
    // console.log(window.innerWidth)
    // window.addEventListener("resize", event => {
    //     console.log(window.innerWidth)
    // })