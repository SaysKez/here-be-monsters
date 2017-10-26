var tl = new TimelineMax();
tl.from('#croc', 1, {y: 10, opacity: 0.5});

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
    tl.reverse();
  },function(){
    tl.play();
  })