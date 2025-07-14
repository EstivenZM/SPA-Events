import { routePath } from "../routes.js";
import { containerPage } from "../index.js";
import { appURL } from "../config.js";



export function registerView() {
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
            <div id="alert">
            </div>
            <div class="mb-3 d-flex flex-column text-center">
                <button type="button" class="btn btn-primary" id="buttonRegister">Register</button>
                <span ><a href="#/login" id="login">¿Ya tienes cuenta? Inicia sesión aqui</a></span>
            </div>
        </form>
    </div>`

    let alert = document.getElementById("alert")
    let buttonRegister = document.getElementById("buttonRegister")
    let userFullName = document.getElementById("userFullName")
    let userEmail = document.getElementById("userEmail")
    let userPassword = document.getElementById("userPassword")
    let userRepeatPassword = document.getElementById("userRepeatPassword")



    buttonRegister.addEventListener("click", async (e) => {
        e.preventDefault()
        const res = await fetch(appURL + "/users")
        const users = await res.json()

        validations(users)

    })


    //funcion que realiza las validaciones correspondientes
    function validations(users) {
        let validateNewuser = users.find(user => (user.email == userEmail.value))
        if (validateNewuser) {
            alert.style = "color: red"
            alert.innerHTML = "Ya existe un usuario con este correo electrónico"
        } else {
            if (userPassword.value == userRepeatPassword.value) {
                const newUser = {
                    "fullname": userFullName.value,
                    "email": userEmail.value,
                    "password":userPassword.value,
                    "rol":"user"
                }

                createNewUser(newUser)
                sessionStorage.setItem("auth","true")
                window.location.hash="/dashboard/user/#enrollments"
            } else {
                alert.style = "color: red"
                alert.innerHTML = "La contraseña no coincide"
            }
        }
    }
}

//Funcion que realiza el registro
async function createNewUser(newUser) {
    const res = await fetch(appURL + "/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
}
