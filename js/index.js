import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import { minutesDisplay, secondsDisplay } from "./elements.js"

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
})

const sound = Sound()

const controls = Controls()
Events({ sound, timer, controls })

//darkMode

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bgColor: getStyle(html, "--bg-color"),
    tmColor: getStyle(html, "--tm-color"),
    ipColor: getStyle(html, "--ip-color"),
}
const darkMode = {
    bgColor: "#333333",
    tmColor: "#FFFFFF",
    ipColor: "#FFFFFF",
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
