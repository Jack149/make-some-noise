input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
    for (let index = 0; index < 2; index++) {
        images.iconImage(IconNames.Yes).showImage(0)
        images.createImage(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `).showImage(0)
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
        basic.showString("FUNK")
        break;
    }
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
    basic.clearScreen()
})
