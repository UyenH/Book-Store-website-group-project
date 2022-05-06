const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date(document.lastModified);
var m = months[d.getMonth()];
var a = d.getDate();
var y = d.getFullYear();
var h = d.getHours();
var i = d.getMinutes();
function start()
{
    window.setInterval("TheTime()", 10);
    lastDate();
    textLinks();
    document.getElementById("colorPicker").addEventListener("click", colorChange, false);
}
function nextSlide(currentSlide) {
    slideNumber++;
    if (slideNumber > 2)
        slideNumber = 0;
    currentSlide.setAttribute("src", slideImgs[slideNumber] + ".png");
}
function lastDate()
{
    ID("lastModified").innerHTML = " "+m+" "+a+", "+y+" "+h+":"+i;
}
function TheTime()
{
    var TheDay = new Date();
    Thehour = TheDay.getHours();
    Theminute = TheDay.getMinutes();
    if (Theminute < 10)
        Theminute = "0" + i;
    if (Thehour > 12)
        Thehour -= 12;
    ID("Times").innerHTML = "Current Time is " + Thehour + ":" + Theminute;
}
function ID(text) {
    return document.getElementById(text);
}
function textLinks() {
    var linkList = document.links;
    for (var i = 0; i < linkList.length; i++) {
        if (linkList[i].getAttribute("class") == "mainLink") {
            linkList[i].setAttribute("style", "background-color: darkslategray; text-decoration: none; color: cyan; font-size: 1.1em;");
            ID("mainTextLinks").innerHTML += "<a href = ../"+linkList[i].text+"/"+linkList[i].text+".html>"+linkList[i].text+"</a>| ";
        }
    }
}
function colorChange() {
    var newcolor = window.prompt("Enter the background color you want");
    document.body.style.backgroundColor = newcolor;
}
window.addEventListener( "load", start, false);