document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Karen Loaded");
    console.log(window.location.href);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log(xhr.responseText);
    };
    xhr.open('GET', "https://localhost/api/logging/history/logURL?URL=" + window.location.href);
    xhr.send();
});

