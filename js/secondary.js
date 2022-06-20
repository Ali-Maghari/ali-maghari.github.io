var appsMap = {
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
};

var arrWorkingExperience = [
    {
        "job_title": "Freelance Work",
        "company_name": "Freelancer and Mostaql",
        "job_description": "Work on freelance platforms such as Mostaql and Freelancer with many clients .",
        "start_to_end_date": "2019 - 2022",
    },
    {
        "job_title": "Android Developer",
        "company_name": "One To Three Company",
        "job_description": "Work as a developer of Android applications in Java and Kotlin languages . ",
        "start_to_end_date": "2022 - until now",
    }
]

function setAppId(id) {
    window.localStorage.setItem("app_id", id);
    window.localStorage.setItem("page", 1);
    window.location.href = "app_details.html";
}

function setAppTitle() {
    var app_id = window.localStorage.getItem("app_id");
    for (var i = 0; i < document.getElementsByClassName("app_title").length; i++) {
        document.getElementsByClassName("app_title")[i].innerHTML = appsMap[app_id].title;
    }
}

function setAppDescription() {
    var app_id = window.localStorage.getItem("app_id");
    for (var i = 0; i < document.getElementsByClassName("app_description").length; i++) {
        document.getElementsByClassName("app_description")[i].innerHTML = appsMap[app_id].description;
    }
}

function getAppImages() {
    var app_id = window.localStorage.getItem("app_id");
    var images = appsMap[app_id].images;
    for (var i = 0; i < appsMap[app_id].images.length; i++) {
        images[i] = appsMap[app_id][i];
    }
    return images;
}

function setAppImagesPaginationIndicator() {
    var limit = 6;
    var app_id = window.localStorage.getItem("app_id");
    var page = parseInt(localStorage.getItem("page"));
    var images_number = appsMap[app_id].images.length;
    var current_page = page;
    page = Math.ceil(images_number / limit);
    document.write("<div class='my-4'><ul class='pagination justify-content-center'>");
    for (var i = 1; i <= page; i++) {
        if (i === current_page) {
            document.write("<li class='icon icon-shape icon-sm shadow border-radius-md bg-secondary text-center me-2 d-flex align-items-center justify-content-center' data-bs-toggle='tooltip' title='Current page'><a onclick='setAppPage(" + i + ")' class='text-white text-xs font-weight-bold' href='javascript:;'>" + i + "</a></li>");
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
            document.write("<li class='icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center' data-bs-toggle='tooltip' title='" + tooltip + "'><a onclick='setAppPage(" + i + ")' class='text-secondary text-xs font-weight-bold' href='javascript:;'>" + i + "</a></li>");
        }
    }
    document.write("</ul></div>");
}

function setAppImages() {
    var limit = 6;
    var app_id = window.localStorage.getItem("app_id");
    var page = parseInt(localStorage.getItem("page"));
    var images_number = appsMap[app_id].images.length;
    var current_page = page;
    var start = (current_page - 1) * limit;
    var end = current_page * limit;
    end = Math.abs(end);
    if (end - images_number > limit || images_number <= 0 || current_page <= 0) {
        showNoAppImagesFoundedMessage();
        return;
    }
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
            "                                    <a href='" + appsMap[app_id].images[i] + "'>\n" +
            "                                        <img src='" + appsMap[app_id].images[i] + "' alt='app screen image' class='border-radius-lg bg-cover' style='height: 100%; width: 100%; object-fit: cover'>\n" +
            "                                    </a>\n" +
            "                                </h5>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>");
    }
    setAppImagesPaginationIndicator();
}

function showNoAppImagesFoundedMessage() {
    var app_id = window.localStorage.getItem("app_id");
    var images_number = appsMap[app_id].images.length;
    document.write("<div class='mb-5 mt-4'><div class='align-middle text-center'><span class='text-secondary text-xs font-weight-bold'>Sorry, there is no data to display</span></div></div>");
    if (images_number > 0) {
        document.write("<div class='centered-button justify-content-center py-0 px-4'>\n" +
            "                <div class='text-center col-10 col-lg-4 col-md-8 col-sm-10'>\n" +
            "                    <button onclick='onGoBackButtonClicked(1)' id='btn-edit-consultant-state' type='button'\n" +
            "                            class='btn bg-gradient-info w-100 mt-0 mb-4'>Back to first page\n" +
            "                    </button>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        ");
    }
}

function setAppPage(page) {
    var current_page = parseInt(localStorage.getItem("page"));
    if (page === current_page) {
        return;
    }
    localStorage.setItem("page", page);
    window.location.reload();
}

function onGoBackButtonClicked(page) {
    localStorage.setItem("page", page);
    window.location.reload();
}

function goBackToPreviousPage() {
    history.back();
}

function setWorkingExperience() {
    for (var i = 0; i < arrWorkingExperience.length; i++) {
        var slideStyle = "slideInLeft";
        var direction = "left";
        if (i % 2 === 0) {
            slideStyle = "slideInLeft";
            direction = "left";
        }
        else {
            slideStyle = "slideInRight";
            console.log("reached here");
            direction = "right";
        }
        document.write("<div class='timeline-item " + direction + " wow " + slideStyle + "' data-wow-delay='0.1s'>\n" +
            "                        <div class='timeline-text'>\n" +
            "                            <div class='timeline-date'>" + arrWorkingExperience[i].start_to_end_date + "</div>\n" +
            "                            <h2>" + arrWorkingExperience[i].job_title + "</h2>\n" +
            "                            <h4>" + arrWorkingExperience[i].company_name + "</h4>\n" +
            "                            <p>" + arrWorkingExperience[i].job_description + "</p>\n" +
            "                        </div>\n" +
            "                    </div>");
    }
}


