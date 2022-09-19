export default function () {

    const html = document.querySelector("html")
    const checkbox = document.querySelector("input[name=theme]")

    const getStyle = (element, style) =>
        window
            .getComputedStyle(element)
            .getPropertyValue(style)

    const initialColor = {
        bg: getStyle(html, "--bg-color"),
        tmColor: getStyle(html, "--tm-color"),
        bg: getStyle(html, "--ip-color"),
    }
    const darkMode = {
        bg: "#333333",
        tmColor: "#434343",
        bg: "3664FF",
    }

    const changeColors = (colors) => {

    }

    checkbox.addEventListener("change", ({ target }) => {
        target.checked ? changeColors() : changeColors()
    })

}