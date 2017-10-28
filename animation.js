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

var swampHoverIn = new TimelineMax({paused:true});
swampHoverIn.to('#croc', 1, {y: 2, opacity: 0.8}, 0)
.to('.location-description', 0.5, {opacity: 1}, 0)
.to('.replace-text', 1, {text:"Javascript", ease:Linear.easeNone}, "+=0.5")
.to('.replace-text', 1, {text:"SVGs", ease:Linear.easeNone}, "+=0.5")
.to('.replace-text', 1, {text:"ReactJS", ease:Linear.easeNone}, "+=0.5");


$("#swamp-icon").hover(function(){
    swampHoverIn.play();
  },function(){
    swampHoverIn.reverse();
  })



  var krakenhover = new TimelineMax({paused: true});
  krakenhover.add('start', 0)
  krakenhover.fromTo('#blog-circle', 0.5, {opacity: 0, scale: 1.5, transformOrigin: "center center"}, {ease: "Bounce.easeOut", opacity: 1, scale:1}, 'start')
  .to('#blog-text', 0.5, {fill: "#ED1956"}, 'start');

  $("#blog-box").hover(function(){
    krakenhover.play();
  },function(){
    krakenhover.reverse();
  })