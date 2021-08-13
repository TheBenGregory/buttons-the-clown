import { fetchRequests } from "./dataAccess.js"
import { Buttons } from "./ButtonTheClown.js"

export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = Buttons()
        }
    )
}

render()


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
