const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonVolMore = document.querySelector('.volMore')
const buttonVolLess = document.querySelector('.volLess')

const buttonSoundForest = document.querySelector('.forestSound')
const buttonSoundRain = document.querySelector('.rainSound')
const buttonSoundCoffe = document.querySelector('.coffeSound')
const buttonSoundFire = document.querySelector('.fireSound')

const forestCard = document.querySelector(".forestCard");
const cloudCard = document.querySelector(".raincard");
const coffeeCard = document.querySelector(".coffeCard");
const fireCard = document.querySelector(".fireCard");

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const treeVolume = forestCard.querySelector('input')
const cloudVolume = cloudCard.querySelector('input')
const fireVolume = fireCard.querySelector('input')
const coffeeVolume = coffeeCard.querySelector('input')

const sliderForest = document.querySelector(".volForest");
const sliderRain = document.querySelector(".volRain");
const sliderCoffee = document.querySelector(".volCoffee");
const sliderFire = document.querySelector(".volFire");





export {
    buttonPlay,
    buttonStop,
    buttonVolMore,
    buttonVolLess,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffe,
    buttonSoundFire,
    minutesDisplay,
    secondsDisplay,
    treeVolume,
    cloudVolume,
    fireVolume,
    coffeeVolume,
    sliderForest,
    sliderRain,
    sliderCoffee,
    sliderFire,

}