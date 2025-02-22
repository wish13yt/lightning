function getInfo() {
    useragent.innerText = "Useragent: " + navigator.userAgent
    cookie.innerText = "Can websites set cookies: " + navigator.cookieEnabled
    ram.innerText = "Amount of RAM: " + navigator.deviceMemory + " (approximate, heres why: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory)"
    posture.innerText = "Device posture: " + navigator.devicePosture.type + " (experimental feature, see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/devicePosture)"
    console.log(navigator)
}
function getIP() {
    $.getJSON('https://api.ipify.org?format=json', function(data) {
        IP.innerText = "IP: " + data.ip
    })
}