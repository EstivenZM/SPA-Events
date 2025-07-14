import { loginView } from "./js/login.js";
import {registerView} from "./js/register.js"
import { homeAdminView } from "./js/homeAdminView.js";

export const routes = {
    "#/register": registerView,
    "#/login": loginView,
    "#/dashboard/events/#home": homeAdminView,
    
}

export function hashChangeUser(){
    window.addEventListener("hashchange",()=>{
    routePath(location.hash)
})
}

export function routePath(path) {
    routes[path]()
}
