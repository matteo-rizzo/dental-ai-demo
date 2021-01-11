function imgAnalysis() {
    toggleLoadingBar()
    move()
    setTimeout("toggleLoadingBar()", 2500)
    setTimeout("confirmUpload()", 2500)
}

function move() {
    let elem = document.getElementById("img-analysis-bar");
    let width = 1;
    const id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function toggleLoadingBar() {
    let bar = document.getElementById("loading-bar")
    if (bar.style.display === "block")
        bar.style.display = "none";
    else
        bar.style.display = "block";
}