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
    console.log('test');
    $(".l-gallery").lightGallery();
    $('#fullpage').fullpage({
      //anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '.menu'
    });

    var targetDate = new Date(2017, 6, 31), //Дата до которой нужен таймер
        nowDate = Date.now(), //Текущая дата и время в мил. секундах
        time = (targetDate - nowDate) / 1000; //Получаем секунды

    //console.log(dateWeddeng.getFullYear(), dateWeddeng.getMonth(), dateWeddeng.getDate(), dateTotal);
    var clock = $('.your-clock').FlipClock(time, {
      countdown: true,
      showSeconds: false,
      clockFace: 'DailyCounter',
      language: 'ru'
    });

  }, 500);
    
});
