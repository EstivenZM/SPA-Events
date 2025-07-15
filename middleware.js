let auth = sessionStorage.getItem("auth")
if (auth!="true"){
    window.location.hash ="#/login"
}