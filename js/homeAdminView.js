import { containerPage, aside } from "../index.js";
import { appURL } from "../config.js";
import { hashChangeUser } from "../routes.js";
import { routePath } from "../routes.js";

export function homeAdminView() {
    let auth = sessionStorage.getItem("auth")
    if (auth != "true") {
        window.location.hash = "#/login"
    }else{
        window.location.hash ="#/dashboard/events/#home"
    }
    aside.innerHTML = `<h1>Hola</h1>`
    containerPage.innerHTML = `
        <div class="row">
                <div class="col-md-1 vh-100">
            aa
        </div>
        <div class="col-md-11" id="containerPageDashboard">
            <div class="row container-button mt-5">
                <button class="button" id="createEvent"><a href="#/dashboard/events/#create">Crear evento</a></button>
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
                <button class="btn btn-danger" type="button" id="logOut">Cerrar sesion</button>
            </div>
        </div>
    </div>
    `
    getEvents()

    let logOut = document.getElementById("logOut")
    logOut.addEventListener("click", () => {
        sessionStorage.clear()
        window.location.hash = "#/login"
    })

    async function getEvents() {
        let eventInfo = document.getElementById("eventInfo")
        const res = await fetch(appURL + "/events")
        const events = await res.json()
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






