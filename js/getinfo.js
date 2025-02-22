function getInfo() {
    useragent.innerText = "Useragent: " + navigator.userAgent
    console.log(navigator)
}
function getIP() {
    $.getJSON('https://api.ipify.org?format=json', function(data) {
        IP.innerText = "IP: " + data.ip
    })
}