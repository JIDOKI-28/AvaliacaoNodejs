
const { describe, it, expect } = require('@jest/globals')
const { Adicao, Sub, Divisao, Multi } = require('../src/service/api')

describe('Testes da função adicao', () => {
    
    it('adicao de uma letra com um numero', () => {
        const FunAdicao = () => Adicao(3,'a')
        expect(FunAdicao).toThrow("Informe apenas números")
    })
    it('adicao de um numero com uma letra', () => {
        const FunAdicao = () => Adicao('b', 4)
        expect(FunAdicao).toThrow("Informe apenas números")
    })
    it('adicao com um numero inteiro com outro inteiro', () => {
        const FunAdicao = () => Adicao(5, 2)
        expect(FunAdicao).toThrow(7)
    })
})
describe("Testes da função subtração", () => {
    
    it('subtração de uma letra com um numero', () => {
        const FunSub = () => Sub(3,'a')
        expect(FunSub).toThrow("Informe apenas números")
    })
    it('subtração de um numero com uma letra', () => {
        const FunSub = () => Sub('b', 4)
        expect(FunSub).toThrow("Informe apenas números")
    })
})
describe('Teste da função Divisão', () => {

    it('subtração de uma letra com um numero', () => {
        const Fundivisao = () => Divisao(3,'a')
        expect(Fundivisao).toThrow("Informe apenas números")
    })
    it('subtração de um numero com uma letra', () => {
        const Fundivisao = () => Divisao('b', 4)
        expect(Fundivisao).toThrow("Informe apenas números")
    })
})
describe('Teste da funcão multiplicar', () => {

    it('subtração de uma letra com um numero', () => {
        const FunMuilti = () => Multi(3,'a')
        expect(FunMuilti).toThrow("Informe apenas números")
    })
    it('subtração de um numero com uma letra', () => {
        const FunMuilti = () => Multi('b', 4)
        expect(FunMuilti).toThrow("Informe apenas números")
    })
})