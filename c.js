function getCookie(nameCookie) {
    var oRegex = new RegExp("(?:; )?" + nameCookie + "=([^;]*);?");
 
    if (oRegex.test(document.cookie)) {
        return decodeURIComponent(RegExp["$1"]);
    } else {
        return null;
    }
}
if (getCookie('us2222') == null) {
 let date = new Date(Date.now() + 60000); //86400000ms = 1 jour
date = date.toUTCString();

//CrÃ©e ou met Ã  jour un cookie 'user'
document.cookie = 'us2222=ok; path=/; expires=' + date; 
	var link = "https://google.com";
         window.open( link);
}
