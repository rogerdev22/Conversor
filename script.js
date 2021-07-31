//usado para pegar as informações de uma id especifica
let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")


// essa função faz o calculo da conversao
async function convertMoedas() {
    //async faz com que só carregue as informações apos o servidor receber o retorno 
    //await faz com que o site identifique que precisa aguardar a resposta do servidor
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta) {
        return resposta.json()
    })
    let dolar = moedas.USDBRL.ask
    let euro = moedas.EURBRL.ask


    //altera o valor de entrada para numero
    let inputValorReal = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("troca-moeda")
    let inputReal = document.getElementById("texto-real")

    if (select.value === "US$ - Dólar Americano") {
        let valorDolar = inputValorReal / dolar
        inputMoedas.innerHTML = valorDolar.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    if (select.value === "€ - Euro") {
        let valorEuro = inputValorReal / euro
        inputMoedas.innerHTML = valorEuro.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }

    //altera o valor no html

    inputReal.innerHTML = inputValorReal.toLocaleString("pt-br", { style: "currency", currency: "BRL" })

}

// essa função faz a troca da img da bandeira e o nome da moeda
function trocaDeMoeda() {

    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ - Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./imgs/eua.png"
    }
    if (select.value === "€ - Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./imgs/euro.png"
    }
    convertMoedas()
}

//monitora o evento click
botao.addEventListener("click", convertMoedas)
    //monitora o evento change (alterar a moeda para converter)
select.addEventListener("change", trocaDeMoeda)