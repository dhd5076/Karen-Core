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