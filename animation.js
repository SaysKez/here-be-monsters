//OPENING ANIMATION
var swamp = new TimelineMax();
swamp.from('#croc', 1, {ease: "Back.easeOut", y: 10, opacity: 0.5});

var x = new TimelineMax();
x.from('.x', 1, {transformOrigin:"50% 50%", ease:"Elastic.easeOut", scale:2});



/* Testing out Jake Archibald's path drawing technique
https://jakearchibald.com/2013/animated-line-drawing-svg/

var path = document.querySelector('.trails');
var length = path.getTotalLength();
// Clear any previous transition
path.style.transition = path.style.WebkitTransition =
  'none';
// Set up the starting positions
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
path.getBoundingClientRect();
// Define our transition
path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 2s ease-in-out';
// Go!
path.style.strokeDashoffset = '0';
*/


//KET LOCATION REPEAT
var shipRepeat = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0.05});
shipRepeat.add('start', 0)
.fromTo('#ship', 1, { rotation:-3, transformOrigin: "50% 50%"}, {rotation:3, transformOrigin: "50% 50%"}, 'start');

var chestRepeat = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1});
chestRepeat.to('#chest-inside', 1, {ease: "Back.easeOut", transformOrigin: "50% 50%", scaleY: 1.3}, 0);

var flagRepeat = new TimelineMax({repeat:-1, yoyo:true});
flagRepeat.add('start', 0)
.to('.flag-wave', 1, {scaleY:0.95, scaleX:1.05}, 'start');

var krakenRepeat = new TimelineMax();
krakenRepeat.to('.kraken-tentacles', 1, {transformOrigin: "50% 65%", scaleY: 0.9, scaleX: 0.98, repeat:-1, yoyo:true}, 0)
.to('#kraken-head', 3, {transformOrigin: "50% 65%", scaleY: 0.8}, 0);



//KEY LOCATION HOVERS
//Add fontWeight: "700i" / whatever to make new text italic

  var shipHover = new TimelineMax({paused: true});
  shipHover.add('start', 0)
  shipHover.to('#ship', 0.5, {transformOrigin: "50% 50%", ease: "Back.easeOut", scale:1.1}, 'start')
  .to('.ship-highlight', 0.5, {fill:"#6ad4eb", stroke:"#6ad4eb"}, 'start')
  .to('#about-text', 0.5, {text:"Come Sailing", fill: "#6ad4eb"}, 'start');

  $("#about-box").hover(function(){
    shipHover.play();
  },function(){
    shipHover.reverse();
  })

  var chestHover = new TimelineMax({paused: true});
  chestHover.add('start', 0)
  .to('#chest', 0.5, {transformOrigin: "50% 50%", ease: "Back.easeOut", scale:1.1}, 'start')      
  .to('.chest-highlight', 0.5, {fill:"#6ad4eb", stroke:"#6ad4eb"}, 'start')
  .to('#chest-stoke', 0.5, {stroke: "#6ad4eb"}, 'start')
  .to('#work-text', 0.5, {text:"Peek Inside", fill: "#6ad4eb"}, 'start');

  $("#work-box").hover(function(){
    chestHover.play();
  },function(){
    chestHover.reverse();
  })

  var flagHover = new TimelineMax({paused: true});
  flagHover.add('start', 0)
  .to('#flag', 0.5, {transformOrigin: "50% 50%", ease: "Back.easeOut", scale:1.1}, 'start')    
  .to('.flag-highlight', 0.5, {fill:"#6ad4eb", stroke:"#6ad4eb"}, 'start')
  .to('#cv-text', 0.5, {text:"Pirate for Hire", fill: "#6ad4eb"}, 'start');

  $("#cv-box").hover(function(){
    flagHover.play();
  },function(){
    flagHover.reverse();
  })

  var krakenHover = new TimelineMax({paused: true});
  krakenHover.add('start', 0)
  .to('#kraken', 0.5, {transformOrigin: "50% 50%", ease: "Back.easeOut", scale:1.1}, 'start')  
  .to('.kraken-highlight', 0.5, {fill:"#6ad4eb"}, 'start')
  .to('#kraken-head', 0.5, {transformOrigin: "50% 65%", scaleY: 1}, 'start')   
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



  //MINOR LOCATION HOVERS
  var swampHoverIn = new TimelineMax({paused:true});
  swampHoverIn.to('#croc', 0.75, {ease: "Back.easeIn", y: 10, opacity: 0.8}, 0)
  .to('#swamp-text', 0.75, {text:"Swamps of Javascript"}, 0);
  
  $("#stop2").hover(function(){
      swampHoverIn.play();
    },function(){
      swampHoverIn.reverse();
  })

  var skeletonHover = new TimelineMax({paused:true});
  skeletonHover.to('#skeleton-sword', 0.75, {transformOrigin: "50% 100%", scaleY:0.8}, 0)
  .to('#skeleton-text', 0.75, {text:"Problem Assassin"}, 0);
  
  $("#stop5").hover(function(){
    skeletonHover.play();
    },function(){
    skeletonHover.reverse();
  })