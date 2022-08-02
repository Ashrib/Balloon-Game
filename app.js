function startGame() {
   var colors = ["#84cc16", "#22c55e", "#67e8f9", "yellow", "#8b5cf6", "#ec4899"];
   var ids = ["bal-1","bal-2", "bal-3", "bal-4", "bal-5", "bal-6", "bal-7","bal-8", "bal-9", "bal-10", "bal-11", "bal-12"]

   for(var i = 0; i < ids.length; i++) {
       var randomColor = colors[ Math.floor(Math.random() * colors.length) ];
       var rndmBal = ids[i];
       var getBal = document.getElementById(rndmBal);
       getBal.style.backgroundColor = randomColor;
   }
}