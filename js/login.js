import { routePath } from "../routes.js";
import { containerPage } from "../index.js";
import { appURL } from "../config.js";

export function loginView() {
    containerPage.innerHTML = `
    <div class="container mt-5 d-flex aling-center justify-content-center">
            <form id="formLogin">
                <div class="mb-3">
                    <label for="formEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="formEmail" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="formPassword" class="form-label">Password</label>
                    <input type="password" class="form-control" id="formPassword">
                </div>
                <div class="mb-3 d-flex flex-column text-center">
                    <button type="button" class="btn btn-primary" id="buttonLogin">Login</button>
                    <span ><a href="#/register" id="register">Click para registrarse</a></span>
                </div>
            </form>
    </div > `
    let buttonLogin = document.getElementById("buttonLogin")
    let userEmail = document.getElementById("formEmail")
    let userPassword = document.getElementById("formPassword")


    buttonLogin.addEventListener("click", async (e) => {
        e.preventDefault()
        const res = await fetch(appURL + "/users")
        const users = await res.json()


        login(users)

    })
    function login(users) {
        let validate = users.find(user => (user.email == userEmail.value && user.password == userPassword.value))
        if (validate && validate.rol == "admin") {
            window.location.hash ="/dashboard/events/#home"
        } else if(validate.rol=="user") {
            window.location.hash="/dashboard/user/#enrollments"
        }
    }
    let buttonRegister = document.getElementById("register")
    buttonRegister.addEventListener("click", () => {
        let path = buttonRegister.getAttribute("href")
        routePath(path)
    })


}
