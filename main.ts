input.onGesture(Gesture.LogoUp, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
let Player: game.LedSprite = null
Player = game.createSprite(2, 2)
let food = game.createSprite(randint(0, 4), randint(0, 4))
game.setScore(0)
basic.forever(function () {
    if (Player.isTouching(food)) {
        food.set(LedSpriteProperty.Y, randint(0, 4))
        food.set(LedSpriteProperty.X, randint(0, 4))
        game.addScore(1)
    }
})
basic.forever(function () {
    basic.pause(30000)
    game.gameOver()
})
