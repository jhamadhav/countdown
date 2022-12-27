document.addEventListener("mousemove", (e) => {

    let W = window.innerWidth
    let cx = Math.floor(W / 2)
    let x = e.clientX
    // console.log(`cx: ${cx}, x: ${x}`);


    let diff = Math.abs(cx - x)
    // console.log(diff);
    let deg = Math.floor(100 * (diff / cx))
    // console.log(deg);
    if (x < cx) {
        deg = -Math.floor(40 * (diff / cx))
    }
    document.getElementById("light").style.transform = `rotate(${deg}deg)`
})