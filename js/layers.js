function toggleLayer(layer_name) {
    let layer_btn = document.getElementById("btn-" + layer_name)
    let layer_img = document.getElementById("layer-" + layer_name)
    let details_text = document.getElementById("text-" + layer_name)

    if (layer_btn.classList.contains("displaying")) {
        // Hide layer
        layer_btn.classList.remove("displaying");
        layer_img.classList.add("w3-hide");
        details_text.classList.add("w3-hide");
    } else {
        // Show layer
        layer_btn.classList.add("displaying");
        layer_img.classList.remove("w3-hide");
        details_text.classList.remove("w3-hide");
    }
}

function clearLayers() {
    // Fade buttons
    let dropdowns = document.getElementsByClassName("dropdown-container");
    for (let i = 0; i < dropdowns.length; i++) {
        let buttons = dropdowns[i].children;
        for (let j = 0; j < buttons.length; j++)
            buttons[j].classList.remove("displaying");
    }

    // Hide image and text
    let images = document.getElementById("layers-images").children;
    let texts = document.getElementById("layers-texts").children;
    for (let i = 0; i < images.length; i++) {
        let img = images[i]
        if (!img.classList.contains("w3-hide"))
            img.classList.add("w3-hide");
        let text = texts[i]
        if (!text.classList.contains("w3-hide"))
            text.classList.add("w3-hide");
    }
}

function showAllLayers() {
    // Highlight buttons
    let dropdowns = document.getElementsByClassName("dropdown-container");
    for (let i = 0; i < dropdowns.length; i++) {
        let buttons = dropdowns[i].children;
        for (let j = 0; j < buttons.length; j++)
            buttons[j].classList.add("displaying");
    }

    // Show images and texts
    let images = document.getElementById("layers-images").children;
    let texts = document.getElementById("layers-texts").children;
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("w3-hide");
        texts[i].classList.remove("w3-hide");
    }
}

function openModal() {
    document.getElementById("segmentation-details").style.display = "block";
}

function closeModal() {
    document.getElementById("segmentation-details").style.display = "none";
}
