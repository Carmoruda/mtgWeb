let buttonReject = document.querySelector("#reject-button");
let buttonAccept = document.querySelector("#accept-button");

buttonReject.addEventListener("click", rejectCookies);
buttonAccept.addEventListener("click", acceptCookies);

// Create cookies
function createCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


// Acept cookies
function acceptCookies() {
    createCookie("cookiesAccepted", "true", 30); // Cookie created. Name = "cookiesAccepted", value = "true", expires in 30 days
    hideCookiesBanner();
}

// Reject cookies
function rejectCookies() {
    createCookie("cookiesAccepted", "false", 30); // Cookie created. Name = "cookiesAccepted", value = "false", expires in 30 days
    hideCookiesBanner();
}

// Hide cookies banner
function hideCookiesBanner() {
    var banner = document.querySelector(".cookies-banner");
    banner.style.display = "none";
}
