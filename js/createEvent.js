import { containerPage } from "../index.js";
import { appURL } from "../config.js";
import { hashChangeUser, routePath, routes } from "../routes.js";
//import { appURL } from "../config.js";
export function createEventView() {
    let auth = sessionStorage.getItem("auth")
    if (auth != "true") {
        window.location.hash = "#/login"
    }
    containerPage.innerHTML = `
    <div class="row">
        <div class="col-md-1 vh-100">
            aa
        </div>
            <div class="col-md-11">
                <div class="container mt-5">
                    <form id="formNewEvent">
                        <h1>Create Event</h1>
                        <div class="mb-3">
                            <label for="eventName" class="form-label">Name</label>
                            <input type="text" class="form-control" id="eventName">
                        </div>
                        <div class="mb-3">
                            <label for="eventDescription" class="form-label">Description</label>
                            <textarea class="form-control" id="eventDescription" rows="3"></textarea>
                        </div>
                        <div class="mb-3 d-flex">
                            <div class="w-50">
                                <label for="eventDate" class="form-label">Date</label>
                                <input type="date" class="form-control" id="eventDate">
                            </div>
                            <div class="w-50">
                                <label for="eventCapactiy" class="form-label">Capacity</label>
                                <input type="number" class="form-control" id="eventCapactiy">
                            </div>
                        </div>
                        <button class="btn btn-success" id="buttonCreateEvent" type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>
        `
    let formNewEvent = document.getElementById("formNewEvent")
    let eventName = document.getElementById("eventName")
    let eventDescription = document.getElementById("eventDescription")
    let eventDate = document.getElementById("eventDate")
    let eventCapactiy = document.getElementById("eventCapactiy")



    formNewEvent.addEventListener("submit", async (e) => {
        e.preventDefault()
        const res = await fetch(appURL + "/events")
        const events = await res.json()

        validationDate(events)
    })


    //funcion que realiza las validaciones correspondientes
    function validationDate(events) {
        let validateNewuser = events.find(event => (event.date == eventDate.value))
        if (validateNewuser) {
            alert.style = "color: red"
            alert.innerHTML = "Ya existe un evento en esta fecha"
        } else {
            try {
                const newEvent = {
                    "name": eventName.value,
                    "description": eventDescription.value,
                    "capacity": eventCapactiy.value,
                    "date": eventDate.value,
                    "guest": []
                }
                createEvent(newEvent)
                window.location = "#/dashboard/events/#home"
            } catch (error) {
                console.error("ERROR", error)
            }
        }
    }


    //Funcion que realiza el registro
    async function createEvent(newEvent) {
        const res = await fetch(appURL + "/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        })
    }
}
