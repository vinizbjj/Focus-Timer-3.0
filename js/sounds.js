export default function () {
    const forest = new Audio("./sounds/Floresta.wav")
    const rain = new Audio("./sounds/Chuva.wav")
    const coffee = new Audio("./sounds/Cafeteria.wav")
    const fire = new Audio("./sounds/Lareira.wav")

    forest.loop

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

