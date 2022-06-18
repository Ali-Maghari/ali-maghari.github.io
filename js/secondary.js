var map = {
    "to_do_list": {
        "title": "To Do List",
        "description": "A simple to do list app",
        "images": [
            "img/to_do_list/1.png",
            "img/to_do_list/2.png",
        ],
    },
    "e_learning": {
        "title": "E learning",
        "description": "A simple e learning app",
        "images": [
            "img/to_do_list/1.png",
        ],
    }
}

function setAppId(id) {
    window.localStorage.setItem("app_id", id);
    window.location.href = "app_details.html";
}

function setAppTitle() {
    var app_id = window.localStorage.getItem("app_id");
    for (var i = 0; i < document.getElementsByClassName("app_title").length; i++) {
        document.getElementsByClassName("app_title")[i].innerHTML = map[app_id].title;
    }
}

function setAppDescription() {
    var app_id = window.localStorage.getItem("app_id");
    for (var i = 0; i < document.getElementsByClassName("app_description").length; i++) {
        document.getElementsByClassName("app_description")[i].innerHTML = map[app_id].title;
    }
}


