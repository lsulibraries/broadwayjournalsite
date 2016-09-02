



$(document).ready(function() {

    $('#loadingWrap').fadeOut(1200, function(){ $(this).remove();});
    $("#wrapper").fadeIn(1500);

    $('#navIcon').click(function(){
        $(this).toggleClass('open');
    });

});

    $('#titleHome').vide('loop/typewriterShort.mp4',{
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,

    });

    $('.contentMain').vide('loop/snowwhite.mp4',{
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,

    });

    $('#titleFieldwork').vide('loop/tableH264bw.mp4',{
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,

    });

    $('#titleListen').vide('loop/reelH264bw.mp4',{
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,

    });

    $('#titleResources').vide('loop/vuH264bw.mp4',{
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,

    });

    $('#titlePartner').vide('loop/twinsH264bw.mp4',{
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,

    });

var itemReveal = {
  delay    : 200,
  distance : '90px',
  easing   : 'ease-in-out',
  rotate   : { z: 10 },
  scale    : 1.1
};

window.sr = ScrollReveal();
sr.reveal('.sectionTitle', { duration: 1000, delay: 800, distance: 0});
sr.reveal('.largeTitle', { duration: 1000 });
sr.reveal('.itemTile', { duration: 1000, delay: 500,  easing: 'ease-in', }, 150);
sr.reveal('.subText', { duration: 1000, delay: 500, distance: 20  });
sr.reveal('.menuBox', { duration: 500}, 150);
sr.reveal('.ohFooter2 a', { duration: 2000, distance: 20 }, 150);
sr.reveal('#creativeCommons', { duration: 2500, distance: 20 }, 150);
sr.reveal('.conBox', { duration: 2000, distance: 20 }, 150);
sr.reveal('a .linkSingle', { duration: 200, delay: 500, distance: 20 }, 20);

$(window).on("orientationchange",function(){
  if(window.orientation == 0) // Portrait
  {

  }
  else // Landscape
  {
    $("sectionCover").css({"border-right": "1px solid #8c8c8c","width": "50%", "border-bottom": "0px",});
    $("sectionTitle").css({"display": "flex", "margin": "0px",});
    $("introWording").css({"padding-left": "20px", "padding-right": "20px",});
  }
});


$( document ).scroll(function() {
    if($( document ).scrollTop() > 0) {
      $( ".scrollNotice" ).css({"opacity":"0", "-webkit-transition":"2s","transition": "2s"});
      $( ".peekArea" ).css({"opacity":"0", "-webkit-transition":"2s","transition": "2s"});
    }
    else{
    $( ".scrollNotice" ).css({"opacity":"1"});
    $( ".peekArea" ).css({"opacity":"1"});

    }
});





$( document ).ajaxComplete(function() {
if($('.modalPage').is(':visible')) {

    $("html").css({"overflow":"hidden"});


}
else{
        $("html").css({"overflow":"auto"});
}
});



var userAgent = window.navigator.userAgent;



if (userAgent.match(/iPhone/i) || userAgent.match(/iPad/i)) {
   // iPad or iPhone
            $(".introHeader").css({"height":"calc(100vh - 70px)"});
        $(".scrollNotice").css({"padding-bottom":"0px"});

 }
else {
}

if(navigator.userAgent.match('CriOS')){
            $(".introHeader").css({"height":"100vh"});
}

function myFunction() {
    document.getElementsByClassName("topNav")[0].classList.toggle("navExpand");
}




var myMenu = $("#oh-menu");

// initialize mmenu
myMenu.mmenu({

            navbar: {
            title: "Center Collections & Projects",
            },
            extensions: ["pagedim-black", "multiline"],
            navbars: {
              content: [ "searchfield" ]
              },
            sectionIndexer: {
              addTo: "ul.longList",
              },
            searchfield: {
              resultsPanel: true,
              showTextItems: true,
              }
             }, {
           searchfield: {
            clear: true
            },
            extensions: ["theme-light", "pagedim-black", "multiline"],

});

// initialize mmenu API
var myMenuAPI = myMenu.data( "mmenu" );


// function to set to specific subMenu
function setMMenu(subMenu) {
  // set to subMenu
  var current = myMenu.find(subMenu);

  // myMenuAPI.setSelected(current.first());
  myMenuAPI.openPanel(current.closest(".mm-panel"));
}

// function to open mmmenu to specific subMenu
function openMMenu() {
  myMenuAPI.open();
}
