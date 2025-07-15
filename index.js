import { loginView } from "./js/login.js";
import { hashChangeUser, routePath, routes } from "./routes.js";

//Contenedor donde se ingresa el contenido
export let containerPage = document.getElementById("app")
export let aside = document.getElementById("aside")

hashChangeUser()
loginView()
let auth = sessionStorage.getItem("auth")
if (auth!="true"){
    window.location.hash ="#/login"
}



