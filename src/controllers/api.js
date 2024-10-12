const ServiceApi = require('../service/api')

class ControllerApi {
    Operacoes(req, res) {
        let operacoes = ["Adição +", "Subtração -", "Divisão /", "multiplicação *"]
        res.json({msg: operacoes})
    }
    Adicao(req, res) {
        try {
            const resultado1 = ServiceApi.Adicao(req.body.adicao1, req.body.adicao2)
            res.json({msg: `Sua Adicao da calculadora deu ${resultado1}`})
        } catch (error) {
            res.json({msg: "Informe apenas números"})
        }
    }
    Sub(req, res) {
        try {
            const resultado2 = ServiceApi.Sub(req.body.sub1, req.body.sub2)
            res.json({msg: `Sua Subtração da calculadora deu ${resultado2}`})
        } catch (error) {
            res.json({msg: "Informe apenas números"})
        }
    }
    Divisao(req, res) {
        try {
            const resultado3 = ServiceApi.Divisao(req.body.divisao1, req.body.divisao2)
            res.json({msg: `Sua Divisão da calculadora deu ${resultado3}`})
        } catch (error) {
            res.json({msg: "Informe apenas números"})
        }
    }
    Multi(req, res) {
        try {
            const resultado4 = ServiceApi.Multi(req.body.multi1, req.body.multi2)
            res.json({msg: `Sua Multipilação da calculadora deu ${resultado4}`})
        } catch (error) {
            res.json({msg: "Informe apenas números"})
        }
    }
    Potencia(req, res) {
        try {
            const resultado5 = ServiceApi.Potencia(req.body.numero, req.body.numeroDaPontencia)
            res.json({msg: `Sua Potencia da calculadora deu ${resultado5}`})
        } catch (error) {
            res.json({msg: "Informe apenas números"})
        }
    }
    Raiz(req, res) {
        try {
            const resultado6 = ServiceApi.Raiz(req.body.numeroRaiz)
            res.json({msg: `Sua Potencia da calculadora deu ${resultado6}`})
        } catch (error) {
            res.json({msg: "Informe apenas números"})
        }
    }
}
module.exports = new ControllerApi()