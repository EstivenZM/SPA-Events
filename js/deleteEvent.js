import { appURL } from "../config.js";

async function getEvent() {
    const res = await fetch(appURL+"/events",{
        method:"DELETE",
        

    })
}