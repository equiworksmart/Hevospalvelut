function hideAll() {
    const me = document.getElementById("first");
    const services = document.getElementById("second");
    const priceList = document.getElementById("third");
    const contact = document.getElementById("fourth");
    me.classList.add("hidden");
    services.classList.add("hidden");
    priceList.classList.add("hidden");
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
function showPriceList() {
    hideAll();
    const priceList = document.getElementById("third");
    priceList.classList.remove("hidden");
}
function showContact() {
    hideAll();
    const contact = document.getElementById("fourth");
    contact.classList.remove("hidden");
}