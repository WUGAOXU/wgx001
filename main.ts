input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        basic.showLeds(`
            . # . . #
            . # . . #
            . # # # #
            . # . . #
            . # . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . . .
            . # . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . . .
            . # . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # # .
            . . # . .
            . # . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # . . #
            . # . . #
            . # # # #
            . # . . #
            . # . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            . # # . .
            . # . # .
            . # . # .
            . # . # .
            . # # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # # .
            . . # . .
            . # . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(500)
        images.createImage(`
            . . . # .
            . # # # #
            # # # # #
            . # . # .
            . . # . #
            `).showImage(0)
        basic.pause(500)
        images.createImage(`
            . # # # .
            . # # . .
            . # # # .
            . . # . .
            # . # . #
            `).showImage(0)
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
    }
})
basic.pause(100)
