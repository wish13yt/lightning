function getInfo() {
    useragent.innerText = "Useragent: " + navigator.userAgent
    cookie.innerText = "Can websites set cookies: " + navigator.cookieEnabled
    if (navigator.userAgent.indexOf("Firefox") > 0) {
        ram.innerText = "Sorry! Firefox does not support detecting RAM."
        posture.innerText = "Sorry! Firefox does not support detecting device posture."
    } else {
        ram.innerText = "Amount of RAM: " + navigator.deviceMemory + " (approximate, heres why: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory)"
        posture.innerText = "Device posture: " + navigator.devicePosture.type + " (experimental feature, see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/devicePosture)"
    }
    points.innerText = "Amount of touch points: " + navigator.maxTouchPoints + " (pretty much just how many fingers you can use on your device at once)"
    console.log(navigator)
}
function getIP() {
    $.getJSON('https://api.ipify.org?format=json', function(data) {
        IP.innerText = "IP: " + data.ip
    })
}
function getLocation() {
    location.innerText = "Location: " + navigator.geolocation
}