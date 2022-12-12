const h1 = document.querySelector("div.hello:first-child h1")


function handleTitleClick() {
    h1.style.color = "blue";
}
function handleMuuseEnter() {
    h1.innerText = "Mouse is here!";
}
function handleMuuseLeave(){
    h1.innerText = "Mouse is gone!";
}

function hndleWindowReszie(){
    document.body.style.background = "tomato"
}

function handleWindowCopy(){
    alert("copier")
}
function hamdleWindowOffline(){
    alert("SOS no WIFI")
}

function hamdleWindowOine(){
    alert("ALL GOOD!")
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMuuseEnter);
h1.addEventListener("mouseleave", handleMuuseLeave);

window.addEventListener("resize", hndleWindowReszie);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", hamdleWindowOffline);
window.addEventListener("online", hamdleWindowOine);
