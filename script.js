function hideAll() {
    const me = document.getElementById("first");
    const services = document.getElementById("second");
    const contact = document.getElementById("third");
    me.classList.add("hidden");
    services.classList.add("hidden");
    contact.classList.add("hidden");
  }

function showMe() {
    hideAll();
    const me = document.getElementById("first");
    me.classList.remove("hidden");
}
function showServices() {
    hideAll();
    const services = document.getElementById("second");
    services.classList.remove("hidden");
}
function showContact() {
    hideAll();
    const contact = document.getElementById("third");
    contact.classList.remove("hidden");
}