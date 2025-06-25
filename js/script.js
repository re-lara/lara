var encEmail = "cmVpbWVsYXJhQGdtYWlsLmNvbQ==";
const form = document.getElementById("mail-contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
