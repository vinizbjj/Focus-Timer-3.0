export default function () {
    const buttonSoundForest = new Audio("./sounds/Floresta.wav")
    const buttonSoundRain = new Audio("./sounds/Chuva.wav")
    const buttonSoundCoffe = new Audio("./sounds/Cafeteria.wav")
    const buttonSoundFire = new Audio("./sounds/Lareira.wav")




    buttonSoundForest.loop

    function pressForestButton() {
        buttonSoundForest.play()
        buttonSoundRain.pause()
        buttonSoundCoffe.pause()
        buttonSoundFire.pause()


    }

    function pressSoundRain() {
        buttonSoundRain.play()
        buttonSoundForest.pause()
        buttonSoundCoffe.pause()
        buttonSoundFire.pause()
    }

    function pressSoundCoffe() {
        buttonSoundCoffe.play()
        buttonSoundForest.pause()
        buttonSoundRain.pause()
        buttonSoundFire.pause()
    }


    function pressSoundFire() {
        buttonSoundFire.play()
        buttonSoundForest.pause()
        buttonSoundRain.pause()
        buttonSoundCoffe.pause()
    }

    function pauseAllSounds() {
        buttonSoundForest.pause()
        buttonSoundRain.pause()
        buttonSoundCoffe.pause()
        buttonSoundFire.pause()
    }



    return {
        pressForestButton,
        pressSoundRain,
        pressSoundCoffe,
        pressSoundFire,
        pauseAllSounds
    }
}

