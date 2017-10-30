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

var swampHoverOut = new TimelineMax({paused:true});
swampHoverOut.to('.location-description', 0.5, {opacity: 0}, 0);


$("#swamp-icon").hover(function(){
    swampHoverIn.play();
  },function(){
    swampHoverOut.play();
  })




//KEY LOCATION HOVERS

  var krakenhover = new TimelineMax({paused: true});
  krakenhover.add('start', 0)
  krakenhover.to('.kraken-tentacles', 0.5, {fill:"#ED1956"}, 'start')
  .to('#blog-text', 0.5, {text:"Here Be Monsters", fill: "#000"}, 'start');

  $("#blog-box").hover(function(){
    krakenhover.play();
  },function(){
    krakenhover.reverse();
  })


  var shiphover = new TimelineMax({paused: true});
  shiphover.add('start', 0)
  shiphover.to('.ship-highlight', 0.5, {fill:"#6ad4eb", stroke:"#6ad4eb"}, 'start')
  .to('#about-text', 0.5, {text:"Come Sailing", fill: "#6ad4eb"}, 'start');

  $("#about-box").hover(function(){
    shiphover.play();
  },function(){
    shiphover.reverse();
  })


  var keyLocations = new TimelineMax({repeat:-1, yoyo:true, repeatDelay: 0.25});
  keyLocations.add('start', 0)
  .fromTo('#ship', 1, {ease: "Back.easeOut", rotation:-5, transformOrigin: "center center"}, {rotation:5, transformOrigin: "center center"}, 'start', );