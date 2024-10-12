class ServiceApi {
    Adicao(adicao1, adicao2) {
        if (isNaN(adicao1) || isNaN(adicao2)) {
            throw new Error("Informe apenas números")
        }
        return (Number(adicao1) + Number(adicao2));
    }
    Sub(sub1, sub2) {
        if (isNaN(sub1) || isNaN(sub2)) {
            throw new Error("Informe apenas números")
        }
        return (Number(sub1) - Number(sub2));
    }
    Divisao(divisao1, divisao2) {
        if (isNaN(divisao1) || isNaN(divisao2)) {
            throw new Error("Informe apenas números")
        }
        return (Number(divisao1) / Number(divisao2));
    }
    Multi(multi1, multi2) {
        if (isNaN(multi1) || isNaN(multi2)) {
            throw new Error("Informe apenas números")
        }
        return (Number(multi1) * Number(multi2));
    }
    Potencia(numero, numeroDaPontencia) {
        if (isNaN(numero) || isNaN(numeroDaPontencia)) {
            throw new Error("Informe apenas números")
        }
        return (Number(numero) ** Number(numeroDaPontencia))
    }
    Raiz(numeroRaiz) {
        if (isNaN(numeroRaiz))  {
            throw new Error("Informe apenas números")
        }
        return Math.sqrt(numeroRaiz)
    }
}
module.exports = new ServiceApi()