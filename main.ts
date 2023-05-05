input.onGesture(Gesture.Shake, function () {
    Number2 += 1
    led.stopAnimation()
})
let Number2 = 0
basic.forever(function () {
    basic.showNumber(Number2)
})
