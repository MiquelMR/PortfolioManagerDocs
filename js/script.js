const version_log_dir = "version_logs/";
const testing_dir = "testing/";
const endpoint_tables_dir = "endpoint_tables/";
const page_dir = "pages/";

function loadEndpointTable(page) {
    let fullpath = endpoint_tables_dir + page + ".html";
    fetch(fullpath)
        .then(response => response.text())
        .then(data => document.getElementById("endpoint_table").innerHTML = data)
        .catch(error => console.error("Error loading content:", error));
}

function loadVersionLog(versionLog) {
    let fullpath = version_log_dir + versionLog + ".html";
    fetch(fullpath)
        .then(response => response.text())
        .then(data => document.getElementById("versionLog").innerHTML = data)
        .catch(error => console.error("Error loading content:", error));
}

function loadContent(page) {
    let fullpath = page_dir + page + ".html";
    console.log(fullpath);
    fetch(fullpath)
        .then(response => response.text())
        .then(data => document.getElementById("content").innerHTML = data)
        .catch(error => console.error("Error loading content:", error));
}

