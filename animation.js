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


//KET LOCATION REPEAT
var shipRepeat = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0.05});
shipRepeat.add('start', 0)
.fromTo('#ship', 1, { rotation:-3, transformOrigin: "50% 50%"}, {rotation:3, transformOrigin: "50% 50%"}, 'start');


var flagRepeat = new TimelineMax({repeat:-1, yoyo:true});
flagRepeat.add('start', 0)
.to('.flag-wave', 1, {scaleY:0.95, scaleX:1.05}, 'start');


//KEY LOCATION HOVERS
//Add fontWeight: "700i" / whatever to make new text italic

  var shipHover = new TimelineMax({paused: true});
  shipHover.add('start', 0)
  shipHover.to('.ship-highlight', 0.5, {fill:"#6ad4eb", stroke:"#6ad4eb"}, 'start')
  .to('#about-text', 0.5, {text:"Come Sailing", fill: "#6ad4eb"}, 'start');

  $("#about-box").hover(function(){
    shipHover.play();
  },function(){
    shipHover.reverse();
  })

  var chestHover = new TimelineMax({paused: true});
  chestHover.add('start', 0)
  chestHover.to('.chest-highlight', 0.5, {fill:"#6ad4eb", stroke:"#6ad4eb"}, 'start')
  .to('#work-text', 0.5, {text:"Peek Inside", fill: "#6ad4eb"}, 'start');

  $("#work-box").hover(function(){
    chestHover.play();
  },function(){
    chestHover.reverse();
  })

  var flagHover = new TimelineMax({paused: true});
  flagHover.add('start', 0)
  flagHover.to('.flag-highlight', 0.5, {fill:"#6ad4eb", stroke:"#6ad4eb"}, 'start')
  .to('#cv-text', 0.5, {text:"Pirate for Hire", fill: "#6ad4eb"}, 'start');

  $("#cv-box").hover(function(){
    flagHover.play();
  },function(){
    flagHover.reverse();
  })

  var krakenHover = new TimelineMax({paused: true});
  krakenHover.add('start', 0)
  krakenHover.to('.kraken-highlight', 0.5, {fill:"#6ad4eb"}, 'start')
  .to('#blog-text', 0.5, {text:"Here Be Monsters", fill: "#000"}, 'start');

  $("#blog-box").hover(function(){
    krakenHover.play();
  },function(){
    krakenHover.reverse();
  })

  var xHover = new TimelineMax({paused: true});
  xHover.add('start', 0)
  xHover.to('.x', 0.5, {transformOrigin:"50% 50%", ease: "Back.easeOut", scale:1.1, fill:"#FFF"}, 'start')
  .to('#contact-text', 0.5, {text:"X Marks the Spot", fill: "#6ad4eb"}, 'start');

  $("#contact-box").hover(function(){
    xHover.play();
  },function(){
    xHover.reverse();
  })