basic.forever(function () {
    if (input.lightLevel() > 30) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Forever)
        basic.showString("Egun on")
    }
})
