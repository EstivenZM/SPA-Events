import { containerPage, aside } from "../index.js";
import { appURL } from "../config.js";
import { hashChangeUser } from "../routes.js";
import { routePath } from "../routes.js";

export function homeUserView() {
    if (auth != "true") {
        window.location.hash = "#/login"
    }
    aside.innerHTML = `<h1>Hola</h1>`
    containerPage.innerHTML = `
        <div class="row">
                <div class="col-md-1 vh-100">
            aa
        </div>
        <div class="col-md-11" id="containerPageDashboard">
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
                                <button class="btn btn-success" id="acceptEvent">Entrar</button>
                            </td>
                        </tr>`
        });

        let buttonAccept = document.getElementById("acceptEvent")
        buttonAccept.addEventListener("click", async () => {


        })
    }


}

async function userEvent() {
    let userForEvent = sessionStorage.getItem("user")
    const res = await fetch(appURL + "/users")
    const users = await res.json()

    let search = users.find(user => (user.email == userForEvent))
    if (search) {
        search.event.push()
    }
}

