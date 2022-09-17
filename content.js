"use-strict";

window.onbeforeunload = (e) => localStorage.clear();
init();

function init() {
    document.getElementsByTagName("body")[0].classList.add("app");
    document.getElementById("header").classList.add("navbar");
}
