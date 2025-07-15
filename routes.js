import { loginView } from "./js/login.js";
import {registerView} from "./js/register.js"
import { homeAdminView } from "./js/homeAdminView.js";
import { createEventView } from "./js/createEvent.js";
import { homeUserView } from "./js/homeUser.js";

export const routes = {
    "#/register": registerView,
    "#/login": loginView,
    "#/dashboard/events/#home": homeAdminView,
    "#/dashboard/events/#create":createEventView,
    "#/dashboard/user/#home":homeUserView
    
}

export function hashChangeUser(){
    window.addEventListener("hashchange",()=>{
    routePath(location.hash)
})
}

export function routePath(path) {
    routes[path]()
}
