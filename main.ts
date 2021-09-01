input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(steps * 3)
    basic.showString("FT")
})
input.onButtonPressed(Button.B, function () {
    steps = 0
    basic.showString("Reset Steps to 0!")
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
steps = 0
basic.showString("Started!")
