let pregunta = 0
input.onGesture(Gesture.Shake, function () {
    pregunta = pregunta + 1
    if (pregunta == 1) {
        basic.showNumber(1)
    } else if (pregunta == 2) {
        basic.showNumber(2)
    } else if (pregunta == 3) {
        basic.showNumber(3)
    } else if (pregunta == 4) {
        basic.showNumber(4)
    } else if (pregunta == 5) {
        basic.showNumber(5)
    } else if (pregunta == 6) {
        basic.showNumber(6)
    } else if (pregunta == 7) {
        basic.showNumber(7)
    } else if (pregunta == 8) {
        basic.showNumber(8)
    } else if (pregunta == 9) {
        basic.showNumber(9)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
