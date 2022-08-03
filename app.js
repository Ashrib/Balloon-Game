// Filling random colors in balloons
var colors = ["#84cc16", "#22c55e","#ef4444", "#fde047", "#8b5cf6", "#ec4899", "#fb923c"];
var ids = ["bal-1","bal-2", "bal-3", "bal-4", "bal-5", "bal-6", "bal-7","bal-8", "bal-9", "bal-10", "bal-11", "bal-12", "bal-13", "bal-14","bal-15", "bal-16", "bal-17", "bal-18", "bal-19", "bal-20","bal-21", "bal-22", "bal-23", "bal-24", "bal-25", "bal-26", "bal-27"]
 
for(var i = 0; i < ids.length; i++) {
    var randomColor = colors[ Math.floor(Math.random() * colors.length) ];
    var rndmBalloon = ids[i];
    var getBalloon = document.getElementById(rndmBalloon);
    getBalloon.style.backgroundColor = randomColor;
}
// color for match
var colorBox = document.getElementById("color-to-match");
colorBox.style.backgroundColor =  colors[ Math.floor(Math.random() * colors.length) ];

// Match the balloon
function matchBalloon(balloon) {
    var tfb = document.getElementById(balloon);
    console.log(tfb.style.backgroundColor)

    /*var balloonId;
    switch (balloon) {
        case "balloon-1" :
            balloonId = "bal-1";
            break;
        case "balloon-2" :
            balloonId = "bal-2";
            break;
        case "balloon-3" :
            balloonId = "bal-3";
            break;
        case "balloon-4" :
            balloonId = "bal-4";
            break;
        case "balloon-5" :
            balloonId = "bal-5";
            break;
        case "balloon-6" :
            balloonId = "bal-6";
            break;
        case "balloon-7" :
            balloonId = "bal-7";
            break;
        case "balloon-8" :
            balloonId = "bal-8";
            break;
        case "balloon-9" :
            balloonId = "bal-9";
            break;
        case "balloon-10" :
            balloonId = "bal-10";
            break;
        case "balloon-11" :
            balloonId = "bal-11";
            break;
        case "balloon-12" :
            balloonId = "bal-12";
            break;
    }
    console.log(balloonId)
    var balon = document.getElementById(balloonId);
    console.log(balon.style.backgroundColor)*/
}
 