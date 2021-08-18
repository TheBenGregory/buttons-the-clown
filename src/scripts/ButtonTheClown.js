import { PartyForm } from "./PartyForm.js"
import { Requests } from "./Request.js"



export const Buttons = () => {
    return `
        <h1>Buttons the Clown LLC</h1>

        <div id="forms">
        <section class="serviceForm">
        ${PartyForm()}
        </section>
        </div>

       

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            <div class="service">
            ${Requests()}
            </div>
        </section>
    `
}