let ladoQuadrado = document.getElementById('ladoQuadrado')

let ladoQuadradoResp = document.getElementById('ladoQuadradoValue')

let areaQ = document.getElementById('areaQuadrado')


ladoQuadrado.oninput = function atualizarLadoQuadrado() {
    let ladoQuadradoValue = ladoQuadrado.value / 1

    ladoQuadradoResp.innerHTML = `${ladoQuadradoValue.toFixed(1)}`
    areaQ.innerText = `${ladoQuadradoValue**2}`
}
