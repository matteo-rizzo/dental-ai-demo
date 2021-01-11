function toggleLayer(layer_name) {
    let container = document.getElementById("layers-images");
    let btn = document.getElementById("btn-" + layer_name);
    let text = document.getElementById("text-" + layer_name);

    if (btn.classList.contains("displaying")) {
        // Hide layer
        btn.classList.remove("displaying");
        document.getElementById("layer-" + layer_name).remove()
        text.classList.add("w3-hide");
    } else {
        // Show layer
        btn.classList.add("displaying");
        container.appendChild(generateLayer(layer_name));
        text.classList.remove("w3-hide");
    }
}

function generateLayer(layer_name) {

    let layer = document.createElement('div');
    layer.setAttribute("id", "layer-" + layer_name)
    layer.classList.add("layer")

    let img = document.createElement("img");
    img.setAttribute("src", "img/layers/" + layer_name + ".png");
    img.setAttribute("alt", "layer-" + layer_name);
    layer.appendChild(img)

    return layer;
}

function clearAllLayers() {

    let dropdowns = document.getElementsByClassName("dropdown-container");

    for (let i = 0; i < dropdowns.length; i++) {
        let buttons = dropdowns[i].children;

        for (let j = 0; j < buttons.length; j++) {
            let button = buttons[j];
            const layer_name = button.id.split("-").slice(1).join("-");
            console.log(layer_name)
            if (button.hasAttribute("onclick") && document.getElementById("layer-" + layer_name)) {
                console.log("Removing...")
                button.classList.remove("displaying");
                document.getElementById("layer-" + layer_name).remove();
                document.getElementById("text-" + layer_name).classList.add("w3-hide");
            }
        }
    }
}

function showAllLayers() {

    let container = document.getElementById("layers-images");
    let dropdowns = document.getElementsByClassName("dropdown-container");

    for (let i = 0; i < dropdowns.length; i++) {
        let buttons = dropdowns[i].children;

        for (let j = 0; j < buttons.length; j++) {
            let button = buttons[j];
            const layer_name = button.id.split("-").slice(1).join("-");

            if (button.hasAttribute("onclick") && !document.getElementById(layer_name)) {
                button.classList.add("displaying");
                container.appendChild(generateLayer(layer_name));
                document.getElementById("text-" + layer_name).classList.remove("w3-hide");
            }
        }
    }
}

function openModal() {
    document.getElementById("segmentation-details").style.display = "block";
}

function closeModal() {
    document.getElementById("segmentation-details").style.display = "none";
}

function showHighlight(layer_name, highlight_num) {
    const highlight_name = layer_name + "-highlight-" + highlight_num.toString()
    if (!document.getElementById(highlight_name)) {
        let container = document.getElementById("layers-images");
        container.appendChild(generateLayer(highlight_name))
    }
}

function hideHighlight(layer_name, highlight_num) {
    const highlight_name = "layer-" + layer_name + "-highlight-" + highlight_num.toString()
    let highlight = document.getElementById(highlight_name)
    if (highlight != null)
        highlight.remove();
}