let number = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 3)
    if ((0 as any) == (3 as any)) {
        basic.showIcon(IconNames.Yes)
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Meh)
    }
})
