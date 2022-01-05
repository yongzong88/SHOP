function d1p() {
    if (document.getElementById("d1c").textContent < 10)
        document.getElementById("d1c").textContent = Number(document.getElementById("d1c").textContent) + 1
    document.getElementById("d1f").textContent = document.getElementById("d1e").textContent * document.getElementById("d1c").textContent
    document.getElementById("ttpr").textContent = Number(document.getElementById("d1f").textContent) + Number(document.getElementById("d2f").textContent) + Number(document.getElementById("d3f").textContent)

}

function d2p() {
    if (document.getElementById("d2c").textContent < 10)
        document.getElementById("d2c").textContent = Number(document.getElementById("d2c").textContent) + 1
    document.getElementById("d2f").textContent = document.getElementById("d2e").textContent * document.getElementById("d2c").textContent
    document.getElementById("ttpr").textContent = Number(document.getElementById("d1f").textContent) + Number(document.getElementById("d2f").textContent) + Number(document.getElementById("d3f").textContent)

}

function d3p() {
    if (document.getElementById("d3c").textContent < 10)
        document.getElementById("d3c").textContent = Number(document.getElementById("d3c").textContent) + 1
    document.getElementById("d3f").textContent = document.getElementById("d3e").textContent * document.getElementById("d3c").textContent
    document.getElementById("ttpr").textContent = Number(document.getElementById("d1f").textContent) + Number(document.getElementById("d2f").textContent) + Number(document.getElementById("d3f").textContent)

}

function d1c() {
    if (document.getElementById("d1c").textContent > 0)
        document.getElementById("d1c").textContent = Number(document.getElementById("d1c").textContent) - 1
    document.getElementById("d1f").textContent = document.getElementById("d1e").textContent * document.getElementById("d1c").textContent
    document.getElementById("ttpr").textContent = Number(document.getElementById("d1f").textContent) + Number(document.getElementById("d2f").textContent) + Number(document.getElementById("d3f").textContent)

}

function d2c() {
    if (document.getElementById("d2c").textContent > 0)
        document.getElementById("d2c").textContent = Number(document.getElementById("d2c").textContent) - 1
    document.getElementById("d2f").textContent = document.getElementById("d2e").textContent * document.getElementById("d2c").textContent
    document.getElementById("ttpr").textContent = Number(document.getElementById("d1f").textContent) + Number(document.getElementById("d2f").textContent) + Number(document.getElementById("d3f").textContent)

}

function d3c() {
    if (document.getElementById("d3c").textContent > 0)
        document.getElementById("d3c").textContent = Number(document.getElementById("d3c").textContent) - 1
    document.getElementById("d3f").textContent = document.getElementById("d3e").textContent * document.getElementById("d3c").textContent
    document.getElementById("ttpr").textContent = Number(document.getElementById("d1f").textContent) + Number(document.getElementById("d2f").textContent) + Number(document.getElementById("d3f").textContent)

}

document.getElementById("d1f").textContent = document.getElementById("d1e").textContent * document.getElementById("d1c").textContent
document.getElementById("d2f").textContent = document.getElementById("d2e").textContent * document.getElementById("d2c").textContent
document.getElementById("d3f").textContent = document.getElementById("d3e").textContent * document.getElementById("d3c").textContent
document.getElementById("ttpr").textContent = Number(document.getElementById("d1f").textContent) + Number(document.getElementById("d2f").textContent) + Number(document.getElementById("d3f").textContent)