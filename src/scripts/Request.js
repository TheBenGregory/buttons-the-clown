import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})





export const Requests = () => {
    const requests = getRequests()
    const listItemsArray = (request) => {
    
       
         return  `<li class="request__delete">${request.parDate}<button
          id="request--${request.id}">
     <div id="delete">Delete</div>
 </button></li>`
        }

        let html = ` 
        
        <ul>
      
    ${
        requests.map(listItemsArray).join("")
    }

        </ul > `
   
    return html
    
}
