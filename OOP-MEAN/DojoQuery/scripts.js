// Use the DojoQuery library
var myElem = new $Dojo("test");

// Click alert message
var clickAlertMessage = function() {
    alert("Button clicked!");
};

// Use the "click" DojoQuery method
myElem.click(clickAlertMessage);


var hoverinChangeColor = function() {
    myElem.myId.style.color = "red";
};

var hoveroutRemoveColor = function() {
    myElem.myId.removeAttribute("style");
};

// Change colors on hoverin & hoverout
myElem.hover(hoverinChangeColor, hoveroutRemoveColor);
