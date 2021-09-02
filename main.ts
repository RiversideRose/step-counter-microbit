input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.showString("Steps!")
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(steps * 3)
    basic.showString("FT")
})
input.onButtonPressed(Button.B, function () {
    record = steps
    steps = 0
    basic.showString("Reset Steps to 0!")
    if (record > oldsteps) {
        basic.showString("New Record!")
    }
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let oldsteps = 0
let record = 0
let steps = 0
steps = 0
basic.showString("Started!")
loops.everyInterval(10000, function () {
    oldsteps = steps
})
