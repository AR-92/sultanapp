// var mainRouter = function (name) {
//     localStorage.setItem("currentPage", name.page);
//     document.getElementById('root').innerHTML = name.html;
// }
// var subRouter = function (name) {
//     localStorage.setItem("currentPage", name.page);
//     document.getElementById('root').innerHTML = name.html;
// }

function r(name) {
    eval(`${name}.init()`);
}

function appRest() {
    localStorage.clear();
    allAppData();
}