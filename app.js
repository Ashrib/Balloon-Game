// Filling random colors in balloons
var colors = ["#84cc16", "#22c55e","#ef4444", "#fde047", "#8b5cf6", "#ec4899", "#fb923c"];
var ids = ["balloon-1","balloon-2", "balloon-3", "balloon-4", "balloon-5", "balloon-6", "balloon-7","balloon-8", "balloon-9", "balloon-10", "balloon-11", "balloon-12", "balloon-13", "balloon-14","balloon-15", "balloon-16", "balloon-17", "balloon-18", "balloon-19", "balloon-20","balloon-21", "balloon-22", "balloon-23", "balloon-24", "balloon-25", "balloon-26", "balloon-27"];
 
for(var i = 0; i < ids.length; i++) {
    var randomColor = colors[ Math.floor(Math.random() * colors.length) ];
    var rndmBalloon = ids[i];
    var getBalloon = document.getElementById(rndmBalloon);
    getBalloon.style.backgroundColor = randomColor;
};
// color for match
var colorBox = document.getElementById("color-to-match");
colorBox.style.backgroundColor = colors[ Math.floor(Math.random() * colors.length) ];

// Match the balloon
var score = 0;
document.getElementById("score").innerText = score;
function matchBalloon(v) {
    var clickedBalloon = document.getElementById(v).style.backgroundColor;
    
    if(clickedBalloon === colorBox.style.backgroundColor) {
        colorBox.style.backgroundColor = colors[ Math.floor(Math.random() * colors.length) ];
        document.getElementById("score").innerText = ++score;
    }
    else{
        function tree() {
            document.getElementById(v).style.boxShadow = "3px 5px 4px red";
            setInterval(tree,3000)
        }
        tree()
    }
    document.getElementById(v).style.backgroundColor = colors[ Math.floor(Math.random() * colors.length) ];
};
