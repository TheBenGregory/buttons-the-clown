const mainContainer = document.querySelector("#container")
import { sendRequest } from "./dataAccess.js"

export const PartyForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="parName">Parent Name</label>
    <input type="text" name="parName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="partyAddress">Address</label>
    <input type="text" name="partyAddress" class="input" />
    </div>
    <div class="field">
    <label class="label" for="kidName">Kids Name</label>
    <input type="text" name="kidName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="kidsCount">How Many Kids?</label>
    <input type="number" name="kidsCount" class="input" />
    </div>
    <div class="field">
    <label class="label" for="howLong">Length of Party</label>
    <input type="number" name="howLong" class="input" />
    </div>
    <div class="field">
    <label class="label" for="partyDate">Date of Party</label>
    <input type="date" name="partyDate" class="input" />
    </div>
    
    <div class="requestButton">
    <button class="button" id="submitRequest">Click Here and a Clown Will Show Up To Your House</button>
    </div>
    `
    
    return html
}

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
      
        const partyDate = document.querySelector("input[name='partyDate']").value
        const partyAddress = document.querySelector("input[name='partyAddress']").value
        const howLong = document.querySelector("input[name='howLong']").value
        const kidsCount = document.querySelector("input[name='kidsCount']").value
        const kidName = document.querySelector("input[name='kidName']").value
        const parName = document.querySelector("input[name='parName']").value
        
    
        const dataToSendToAPI = {
            parentName: parName,
            address: partyAddress,
            lengthOfParty: howLong,
            kidName: kidName,
            kidsCount: kidsCount,
            partyDate: partyDate,
        }

       
        sendRequest(dataToSendToAPI)
    }
})