/**
 * Maior valor obtido: 718
 * 
 * - Brisa leve: 10 ~ 150
 * 
 * - Brisa moderada: 151 ~ 300
 * 
 * - Vento forte: 301 ~450
 * 
 * - Ventania forte: 451 ~ 650
 * 
 * - Tempestade: 651 ~ 800
 */
let valor = 0
basic.forever(function () {
    basic.clearScreen()
    valor = pins.analogReadPin(AnalogPin.P1)
    if (valor >= 10 && valor <= 150) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    } else if (valor >= 151 && valor <= 300) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            `)
    } else if (valor >= 301 && valor <= 450) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (valor >= 451 && valor <= 650) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (valor >= 651) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
