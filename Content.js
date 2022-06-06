let webUrls = window.location.hostname
let check;

// localStorage.clear();
var seconds = 10*60*1000; // to clear the localStorage after 1 hour
               // (if someone want to clear after 8hrs simply change hours=8)
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if(now-setupTime > seconds) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
    }
}
if(webUrls === "www.facebook.com") {
    if(localStorage.getItem(check) !== null) {
        window.location.href = "https://unruly-sparkly-dress.glitch.me/";
    }
    else {
    let timeCounter = 0;
    let timeUse = 600;
    let test = setInterval(() => {
        timeCounter++;
        if(timeCounter >= timeUse) {
            window.location.href = "https://unruly-sparkly-dress.glitch.me/";
            localStorage.setItem(check, true);
        }
    }, 1000);
}
}

