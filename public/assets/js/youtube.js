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

$(document).ready(function() {
  setTimeout(function(){
    console.log('test');
    $(".l-gallery").lightGallery();
    $('#fullpage').fullpage({
      menu: '.menu',
      autoScrolling: true,
      normalScrollElements: '#map, #dialogContent_1, #dialogContent_0',
      scrollOverflow: true,
      afterLoad: function(anchorLink, index){
        $('#fullpage').removeClass('blockHide');
      }
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
  var mapZoom;
  if($(window).width() < 800) {
    mapZoom = 11;
  } else {
    mapZoom = 13;
  }
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
          center: [56.006653, 37.172782],
          controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl'],
          zoom: mapZoom
        }, {
          searchControlProvider: 'yandex#search'
        }),

    // Создаём макет содержимого.
      myPlacemarkWithContent = new ymaps.Placemark([55.995300, 37.243494], {
        hintContent: 'Венчание',
        balloonContent: 'Венчание'
      });
    myPlacemarkBanket = new ymaps.Placemark([56.017096, 37.127818], {
      hintContent: 'Торжественный банкет',
      balloonContent: 'Торжественный банкет'
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemarkBanket)
        .add(myPlacemarkWithContent);
  });
    
});
