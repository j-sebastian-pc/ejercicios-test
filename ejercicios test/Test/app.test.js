const suma = require('../Ejercicio/suma.js');
const division = require('../Ejercicio/division.js');
const areaTriangulo = require('../Ejercicio/areaTriangulo.js');
const tipoNumero = require('../Ejercicio/tipoNumero.js');
const numCaracteres = require('../Ejercicio/numCaracteres.js');
const esPrimo = require('../Ejercicio/esPrimo.js');
const numMayor = require('../Ejercicio/numMayor.js');


test('1. suma', () => {
    expect(suma(5,5)).toBe(10)
})

test('2.division', () => {
    expect(division(20,5)).toBe(4)
})

test('3.area triangulo', () => {
    expect(areaTriangulo(10,2)).toBe(10)
})

test('4. numero positivo', () => {
    expect(tipoNumero(10)).toBe('positivo')
})

test('5. numero negativo', () => {
    expect(tipoNumero(-10)).toBe('negativo')
})

test('6. numero si es cero', () => {
    expect(tipoNumero(0)).toBe('cero')
})

test('7. numero de caracteres', () => {
    expect(numCaracteres('hola muchacho')).toBe(13)
})

test('8. si es primo', () => {
    expect(esPrimo(6)).toBe(false)
})

test('9. si es primo', () => {
    expect(esPrimo(2)).toBe(true)
})

test('10. numero Mayor', () => {
    expect(numMayor([1,16,25,3,4,11,90,14])).toBe(90)
})
