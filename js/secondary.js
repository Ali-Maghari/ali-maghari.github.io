var map = {
    "to_do_list": {
        "title": "To Do List",
        "description": "It is an application that helps users to do their tasks, and also helps them to schedule it so that this application provides a notification when the task that the user entered is due, and the user can also use it as a notes application so that he only enters his task without specifying a time and date for it.",
        "images": [
            "img/to_do_list/images/1.png",
            "img/to_do_list/images/2.png",
            "img/to_do_list/images/3.png",
            "img/to_do_list/images/4.png",
            "img/to_do_list/images/5.png",
            "img/to_do_list/images/6.png",
            "img/to_do_list/images/7.png",
            "img/to_do_list/images/8.png",
            "img/to_do_list/images/9.png",
        ],
    },
}

function setAppId(id) {
    window.localStorage.setItem("app_id", id);
    window.localStorage.setItem("page", 1);
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
        document.getElementsByClassName("app_description")[i].innerHTML = map[app_id].description;
    }
}

function getAppImages() {
    var app_id = window.localStorage.getItem("app_id");
    var images = map[app_id].images;
    for (var i = 0; i < map[app_id].images.length; i++) {
        images[i] = map[app_id][i];
    }
    return images;
}

function setAppImagesPaginationIndicator() {
    var limit = 6;
    var app_id = window.localStorage.getItem("app_id");
    var page = parseInt(localStorage.getItem("page"));
    var images_number = map[app_id].images.length;
    var current_page = page;
    page = Math.ceil(images_number / limit);
    document.write("<div class='my-4'><ul class='pagination justify-content-center'>");
    for (var i = 1; i <= page; i++) {
        if (i === current_page) {
            document.write("<li class='icon icon-shape icon-sm shadow border-radius-md bg-secondary text-center me-2 d-flex align-items-center justify-content-center' data-bs-toggle='tooltip' title='Current page'><a class='text-white text-xs font-weight-bold' href='?userId=$userId&type=show&page=$i'>" + i + "</a></li>");
        }
        else {
            var tooltip = "";
            if (i === current_page - 1) {
                tooltip = "Previous page";
            }
            else if (i === current_page + 1) {
                tooltip = "Next page";
            }
            else {
                tooltip = "Page " + i;
            }
            document.write("<li class='icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center' data-bs-toggle='tooltip' title='" + tooltip + "'><a class='text-secondary text-xs font-weight-bold' href='?userId=$userId&type=show&page=$i'>" + i + "</a></li>");
        }
    }
    document.write("</ul></div>");
}

function setAppImages() {
    var limit = 6;
    var app_id = window.localStorage.getItem("app_id");
    var page = parseInt(localStorage.getItem("page"));
    var images_number = map[app_id].images.length;
    var current_page = page;
    page = Math.ceil(images_number / limit);
    var images = map[app_id].images;
    var start = (current_page - 1) * limit;
    var end = current_page * limit;
    if (end > images_number) {
        end = images_number;

    }
    for (var i = start; i < end; i++) {
        document.write("<div class='col-lg-3 col-sm-6 mb-lg-0 mb-4 my-4' data-bs-toggle='tooltip'\n" +
            "                 title='Click on the image to view in full screen mode with the ability to download'>\n" +
            "                <div class='card-body p-3'>\n" +
            "                    <div class='row'>\n" +
            "                        <div class='col-12'>\n" +
            "                            <div class='numbers'>\n" +
            "                                <h5 class='text-sm font-weight-bolder mb-0'>\n" +
            "                                    <a href='" + map[app_id].images[i] + "'>\n" +
            "                                        <img src='" + map[app_id].images[i] + "' alt='app screen image' class='border-radius-lg bg-cover' style='height: 100%; width: 100%; object-fit: cover'>\n" +
            "                                    </a>\n" +
            "                                </h5>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>");
    }

}


