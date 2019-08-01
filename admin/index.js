var mainAdminPageHTML = /*html*/ `
<style>
.nav-link,
.navbar {
    padding: 0rem 1rem;
}

.taskBar {
    margin: 2px;

}

.card {
    border-radius: 25px !important;
    padding: 30px;
}

.taskBaruser {
    margin-top: 8px;
    margin-right: 15px;
    margin-bottom: 8px;
    margin-left: 8px;
}
</style>
<img src hidden onerror="makeGrid('pageContents')">
<div id="pageContents"></div>
`;

function logout() {
    localStorage.setItem("loggedInAdmin", false);
    localStorage.setItem("loggedIn", false);
    mainRouter({
        page: 'loginPage',
        html: loginPageHTML
    });
    titleBarInit('titleBarRoot');

    // window.location.href = "./index.html";
}