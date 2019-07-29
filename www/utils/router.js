var mainRouter = function (name) {
    localStorage.setItem("currentPage", name.page);
    document.getElementById('root').innerHTML = name.html;
}
var subRouter = function (name) {
    localStorage.setItem("currentPage", name.page);
    document.getElementById('root').innerHTML = name.html;
}

function logout() {
    appRest();
    mainRouter({
        page: 'loginPage',
        html: loginPageHTML
    })
}
function appRest(){
    localStorage.clear();
    allAppData();
}