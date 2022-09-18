export default function () {
    const forest = new Audio("./sounds/Floresta.wav")
    const rain = new Audio("./sounds/Chuva.wav")
    const coffee = new Audio("./sounds/Cafeteria.wav")
    const fire = new Audio("./sounds/Lareira.wav")

    forest.loop = true
    rain.loop = true
    coffee.loop = true
    fire.loop = true


    fire.volume = 0.5

    function pressSound(sound) {
        pauseAllSounds()
        sound.play()
    }

    function pauseAllSounds() {
        forest.pause()
        rain.pause()
        coffee.pause()
        fire.pause()
    }

    return {
        pauseAllSounds,
        forest,
        rain,
        coffee,
        fire,
        pressSound,

    }
}

