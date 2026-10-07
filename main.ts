input.onSound(DetectedSound.Loud, function () {
    불켜기 = !(불켜기)
    if (true) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
})
let 불켜기 = false
input.setSoundThreshold(SoundThreshold.Loud, 128)
