var swamp = new TimelineMax();
swamp.from('#croc', 1, {y: 10, opacity: 0.5});

/*
var green = document.getElementById("swamp-icon");
var croc = document.getElementById("croc");


green.onmouseenter = function(){
    TweenMax.to(croc, 1, {y:40, opacity: 0.5});
}

green.onmouseleave = function(){
    TweenMax.from(croc, 1, {y:40, opacity: 0.5});
}
*/


$("#swamp-icon").hover(function(){
    swamp.reverse();
  },function(){
    swamp.play();
  })



  var krakenhover = new TimelineMax({paused: true});
  krakenhover.fromTo('#blog-circle', 0.75, {opacity: 0, scale: 2, transformOrigin: "center center"}, {ease: "Bounce.easeOut", opacity: 1, scale:1});

  $("#blog-box").hover(function(){
    krakenhover.play();
  },function(){
    krakenhover.reverse();
  })