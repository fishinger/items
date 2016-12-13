var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'oBZ3U3nJzvc',
    events: {
      'onReady': onPlayerReady
      //'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  //event.target.playVideo();
}

// $(document).ready(function() {
//   setTimeout(function(){
//     $('.section-info__text').on('click', function () {
      
         
        
//     });
//   }, 500)
  
// })

$(document).ready(function() {
  setTimeout(function(){
    $(".l-gallery").lightGallery(); 
  }, 500)
    
});
