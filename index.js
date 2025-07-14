
import { appURL } from "./config.js";


const routesIndex = {
    "#/register": registerView,
    "#/login": loginView

}
let containerPage = document.getElementById("app")
loginView()

window.addEventListener("hashchange",()=>{
    chageView(location.hash)
})



function chageView(hash){
    routePath[hash]
}



function routePath(path) {
    routesIndex[path]()

}


function registerView() {
    window.location.hash = "#/register"
    containerPage.innerHTML = `
        <div class="container mt-5 d-flex aling-center justify-content-center">
        <form id="formRegister">
            <div class="mb-3">
                <label for="userFullName" class="form-label">Full name</label>
                <input type="text" class="form-control" id="userFullName">
            </div>
            <div class="mb-3">
                <label for="formEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="userEmail">
            </div>
            <div class="mb-3">
                <label for="formEmail" class="form-label">Password</label>
                <input type="password" class="form-control" id="userPassword">
            </div>
            <div class="mb-3">
                <label for="formPassword" class="form-label">Repeat password</label>
                <input type="password" class="form-control" id="userRepeatPassword">
            </div>
            <div class="mb-3 d-flex flex-column text-center">
                <button type="button" class="btn btn-primary" id="buttonRegister">Register</button>
                <span ><a href="#/login" id="login">¿Ya tienes cuenta? Inicia sesión aqui</a></span>
            </div>
        </form>
    </div>`
    let buttonLogin = document.getElementById("login")
    buttonLogin.addEventListener("click", () => {
        let path = buttonLogin.getAttribute("href")
        routePath(path)
    })

}



function loginView() {
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
        if (validate.rol == "admin") {
            console.log("ERES ADMIN")
        } else {
            console.log("Eres usuario")
        }

    }
    let buttonRegister = document.getElementById("register")
    buttonRegister.addEventListener("click", () => {
        let path = buttonRegister.getAttribute("href")
        routePath(path)
    })

}
