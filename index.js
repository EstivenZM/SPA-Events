import { loginView } from "./js/login.js";
import { hashChangeUser } from "./routes.js";

//Contenedor donde se ingresa el contenido
export let containerPage = document.getElementById("app")
loginView(containerPage)
hashChangeUser()


let auth = sessionStorage.getItem("auth")
if (auth!=true){
    loginView(containerPage)
}


