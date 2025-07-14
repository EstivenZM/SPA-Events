import { containerPage } from "../index.js";
import { appURL } from "../config.js";

export function homeAdminView() {
    containerPage.innerHTML = `
        <div class="row">
        <div class="col-md-1">
            aa
        </div>
        <div class="col-md-11">
            <div class="row container-button mt-5">
                <button class="button">hola</button>
            </div>
            <div class="row">
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th scope="col">Description</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Date</th>
                            <th scope="col">Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="eventInfo">

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `
    getEvents()

    async function getEvents() {
        let eventInfo = document.getElementById("eventInfo")
        const res = await fetch(appURL+"/events")
        const events= await res.json()
        events.forEach(event => {
            eventInfo.innerHTML += `
                        <tr>
                            <td id="eventImage">
                                <img src="${event.image}"    
                            </td>
                            <td>${event.description}</td>
                            <td>${event.capacity}</td>
                            <td>${event.date}</td>
                            <td id="eventAction">
                                <button class="btn btn-success" id="editEvent">Editar</button>
                                <button class="btn btn-success" id="deleteEvent">Borrar</button>
                            </td>
                        </tr>`
        });
    }

}
