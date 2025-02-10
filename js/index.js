"use strict";

const no = document.querySelector(".no-button")
const messages = ["What?", "Why not?", "<<--", "Pleaseeee"]
let index = 0
const img = document.querySelector("img")
const images = ["https://media3.giphy.com/media/U3DK5KWnjMKNq/200.webp?cid=790b7611dfu1a9ajycc5beer1y8597ey6r30n3aay847g4k4&ep=v1_gifs_search&rid=200.webp&ct=g","https://64.media.tumblr.com/4d181b800cb79508cffd94adf62505ef/3a00e7982b7cdcb3-a7/s540x810/ab93f3cef65d2cf847c0f41bd4326e8060342c86.gifv", "https://i.redd.it/iawlhwgcvc5c1.gif", "https://media1.tenor.com/m/hAYcG1xkeD4AAAAd/eevee-pok%C3%A9mon-eevee.gif"]

no.addEventListener("click", function(){
    no.innerText = messages[index];
    img.src = images[index]
    index = (index + 1) % messages.length;
})