document.addEventListener("mousemove", (e) => {

    let W = window.innerWidth
    let cx = Math.floor(W / 2)
    let x = e.clientX
    // console.log(`cx: ${cx}, x: ${x}`);


    let diff = Math.abs(cx - x)
    // console.log(diff);
    let deg = Math.floor(40 * (diff / cx))
    // console.log(deg);
    if (x < cx) {
        deg = -deg
    }
    document.getElementById("light").style.transform = `rotate(${deg}deg)`
    document.getElementById("torch").style.transform = `rotate(${deg}deg)`
})