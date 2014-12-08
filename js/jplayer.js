$(document).ready(function(){
      $("#jquery_jplayer_1").jPlayer({
            ready: function () {
                  $(this).jPlayer("setMedia", {
                  title: "Enzo Improvising",
                  ogv: "assets/enzo_piano.ogv",
                  m4v: "assets/enzo_piano.m4v",
                  mp4: "assets/enzo_piano.mp4",
                  poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
                  });
            },
            cssSelectorAncestor: "#jp_container_1",
            swfPath: "js",
            supplied: "ogv,m4v,mp4",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            toggleDuration: true
      });
      $("#jquery_jplayer_2").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "LazyBird",
            mp3: "assets/LazyBird.mp3",
            m4a: "assets/LazyBird.m4a",
            oga: "assets/LazyBird.ogg"
          });
        },
        cssSelectorAncestor: "#jp_container_2",
        swfPath: "/js",
        supplied: "mp3,m4a, oga",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
      });
});