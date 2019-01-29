window.$ = window.jQuery = require('jquery');

const remote = require('electron').remote

$('#min-btn').on('click', e => {
    remote.getCurrentWindow().minimize()
})

$('#max-btn').on('click', e => {
    remote.getCurrentWindow().maximize()
})

$('#close-btn').on('click', e => {
    remote.getCurrentWindow().close()
})

$('[data-toggle="tooltip"]').tooltip()

function toggleMusic(){
    $.get( "/pages/spotify/getCurrentState", function( data ) {
        if(data.is_playing) {
            $.get( "/pages/spotify/pause");

            updatePlayerInfo()

            $("#playButton").addClass("fa-play");
            $("#playButton").removeClass("fa-pause");
        } else {
            $.get( "/pages/spotify/play");

            updatePlayerInfo()

            $("#playButton").addClass("fa-pause");
            $("#playButton").removeClass("fa-play");
        }
      });
} 

function updatePlayerInfo() {
    $.get( "/pages/spotify/getCurrentState", function( data ) {
        $("#album_art").attr("src", data.item.album.images[0].url);
        $("#album_title").text(data.item.name);
        $("#album_artist").text(data.item.artists[0].name)
    });
}

function skipForward() {
    $.get( "/pages/spotify/skipForward", function() {
        updatePlayerInfo()
    })
}

function skipBackward() {
    $.get( "/pages/spotify/skipBackward", function(){
        updatePlayerInfo()
    })

    updatePlayerInfo()
}

updatePlayerInfo()