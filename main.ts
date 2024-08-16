controller.combos.attachCombo("udlrba", function () {
    spideractive = true
    game.splash("Set spider active to true")
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hiding) {
        hiding = false
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
        Render.moveWithController(3)
        invincibility = false
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`seekactivator`, function (sprite, location) {
    Render.toggleViewMode()
    for (let value of tiles.getTilesByType(assets.tile`seekactivator`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    game.showLongText("Terrible Intro Plays", DialogLayout.Center)
    Render.toggleViewMode()
    mySeek = sprites.create(assets.image`off brand seek`, SpriteKind.Enemy)
    mySeek.follow(mySprite, 50)
    tiles.placeOnRandomTile(mySeek, sprites.dungeon.collectibleRedCrystal)
    Render.moveWithController(3, 5, 1)
})
controller.combos.attachCombo("uuddlrl+r", function () {
    game.splash("Seek chase is next door")
    info.setScore(19)
    door = 19
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`closet`) || (mySprite.tileKindAt(TileDirection.Right, assets.tile`closet`) || (mySprite.tileKindAt(TileDirection.Left, assets.tile`closet`) || (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`closet`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`closet`))))) {
        hiding = true
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        Render.moveWithController(0)
    }
    if (mySprite.tileKindAt(TileDirection.Left, sprites.dungeon.chestClosed) || (mySprite.tileKindAt(TileDirection.Bottom, sprites.dungeon.chestClosed) || (mySprite.tileKindAt(TileDirection.Right, sprites.dungeon.chestClosed) || mySprite.tileKindAt(TileDirection.Top, sprites.dungeon.chestClosed)))) {
        if (chestopened) {
        	
        } else {
            chestopened = true
            number = randint(0, 1)
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
            if (spideractive) {
                spideractive = false
                music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
                info.changeLifeBy(-1)
            }
            if (number == 1) {
                if (info.life() != 5) {
                    heal(1)
                }
            }
        }
    }
})
controller.combos.attachCombo("udlrabab", function () {
    game.splash("Toggled current view mode")
    Render.toggleViewMode()
})
info.onScore(30, function () {
    tiles.setCurrentTilemap(tilemap`levelseek`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
})
info.onCountdownEnd(function () {
    if (hiding) {
        info.stopCountdown()
    } else if (itemheld) {
        itemheld = false
        info.stopCountdown()
        music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else {
        Render.moveWithController(0, 0, 0)
        info.changeLifeBy(-5)
    }
})
controller.combos.attachCombo("uuddlrlrbaudlrab", function () {
    hiding = true
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
    game.splash("Cheats", "invincibility activated")
    invincibility = true
})
function heal (amount: number) {
    info.changeLifeBy(amount)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, function (sprite, location) {
    number = randint(0, 5)
    if (number == 0) {
        tiles.setCurrentTilemap(tilemap`door1`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
    } else if (number == 1) {
        tiles.setCurrentTilemap(tilemap`door2`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
    } else if (number == 3) {
        tiles.setCurrentTilemap(tilemap`door3`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
    } else if (number == 4) {
        tiles.setCurrentTilemap(tilemap`levelseek`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
    } else if (number == 5) {
        tiles.setCurrentTilemap(tilemap`dooridk`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
    }
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    door += 1
    info.setScore(door)
    if (randint(0, 3) == randint(0, 3)) {
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
        scene.cameraShake(8, 5000)
        info.startCountdown(5)
    }
    if (randint(0, 10) == randint(0, 10)) {
        spideractive = true
    }
    chestopened = false
    sprites.destroy(mySeek, effects.spray, 5000)
})
controller.combos.attachCombo("uuddlrlrba+b", function () {
    info.setLife(999)
    game.splash("Cheats", "999 hearts activated")
})
controller.combos.attachCombo("l+ru+da+b", function () {
    chestopened = false
    game.splash("Set Chest open to false")
})
info.onScore(20, function () {
    tiles.setCurrentTilemap(tilemap`levelseek`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
})
controller.combos.attachCombo("l+rabu+d", function () {
    Render.toggleViewMode()
    if (game.ask("Debug", "Damage The Player?")) {
        info.changeLifeBy(-1)
    }
    Render.toggleViewMode()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -5
    info.changeLifeBy(-5)
})
let itemheld = false
let number = 0
let chestopened = false
let mySeek: Sprite = null
let invincibility = false
let hiding = false
let spideractive = false
let mySprite: Sprite = null
let door = 0
let statusbar: StatusBarSprite = null
Render.moveWithController(3, 3, 1)
statusbar = statusbars.create(120, 4, StatusBarKind.Health)
statusbar.max = 5
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.setLabel("HP")
statusbar.setColor(13, 2)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
door = 1
game.splash("Off brand Doors", "By: @tails2012tim")
music.play(music.randomizeSound(music.createSoundEffect(WaveShape.Sine, 2407, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)), music.PlaybackMode.UntilDone)
mySprite = Render.getRenderSpriteVariable()
Render.setViewMode(ViewMode.tilemapView)
scene.setBackgroundColor(14)
tiles.setCurrentTilemap(tilemap`door1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
info.setScore(door)
info.setLife(5)
forever(function () {
    if (invincibility) {
        for (let index = 0; index < 2; index++) {
            music.ringTone(262)
            music.rest(music.beat(BeatFraction.Half))
        }
        music.ringTone(262)
        music.rest(music.beat(BeatFraction.Whole))
        music.ringTone(262)
        music.rest(music.beat(BeatFraction.Half))
        for (let index = 0; index < 2; index++) {
            music.ringTone(262)
            music.rest(music.beat(BeatFraction.Eighth))
        }
        music.ringTone(262)
        music.rest(music.beat(BeatFraction.Whole))
        music.ringTone(262)
        music.rest(music.beat(BeatFraction.Double))
        for (let index = 0; index < 2; index++) {
            music.ringTone(247)
            music.rest(music.beat(BeatFraction.Half))
            music.ringTone(247)
            music.rest(music.beat(BeatFraction.Half))
        }
        music.ringTone(247)
        music.rest(music.beat(BeatFraction.Whole))
        for (let index = 0; index < 2; index++) {
            music.ringTone(247)
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 2; index++) {
            music.ringTone(247)
            music.rest(music.beat(BeatFraction.Eighth))
        }
        music.ringTone(247)
        music.stopAllSounds()
        info.setLife(999)
    }
    statusbar.value = info.life()
})
