import {
    buttonPlay,
    buttonStop,
    buttonVolMore,
    buttonVolLess,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffe,
    buttonSoundFire,
    sliderForest,
    sliderRain,
    sliderCoffee,
    sliderFire,
} from "./elements.js"


export default function events({ controls, timer, sound }) {


    buttonPlay.addEventListener('click', function () {
        timer.countdown()
    })

    buttonStop.addEventListener('click', function () {
        sound.pauseAllSounds()
        timer.stop()
    })

    buttonVolMore.addEventListener('click', function () {
        timer.volMore()
    })

    buttonVolLess.addEventListener('click', function () {
        timer.volLess()
    })

    buttonSoundForest.addEventListener('click', function () {
        sound.pressSound(sound.forest)
        controls.forestButton()
        controls.rainButtonDefault()
        controls.coffeButtonDefault()
        controls.fireButtonDefault()
    })

    buttonSoundRain.addEventListener('click', function () {
        sound.pressSound(sound.rain)
        controls.rainButton()
        controls.forestButtonDefault()
        controls.coffeButtonDefault()
        controls.fireButtonDefault()

    })

    buttonSoundCoffe.addEventListener('click', function () {
        sound.pressSound(sound.coffee)
        controls.coffeButton()
        controls.forestButtonDefault()
        controls.rainButtonDefault()
        controls.fireButtonDefault()
    })

    buttonSoundFire.addEventListener('click', function () {
        sound.pressSound(sound.fire)
        controls.fireButton()
        controls.forestButtonDefault()
        controls.rainButtonDefault()
        controls.coffeButtonDefault()
    })

    sliderForest.addEventListener("change", function (e) {
        sound.forest.volume = e.currentTarget.value / 100;
    })

    sliderRain.addEventListener("change", function (e) {
        sound.rain.volume = e.currentTarget.value / 100;
    })

    sliderCoffee.addEventListener("change", function (e) {
        sound.coffee.volume = e.currentTarget.value / 100;
    })

    sliderFire.addEventListener("change", function (e) {
        sound.fire.volume = e.currentTarget.value / 100;
    })




}