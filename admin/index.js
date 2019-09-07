var AdminAccountsPage = {
    html: /*html*/ `
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
    <div id="pageContents"></div>
    `,
    init:function(){
        document.getElementById('root').innerHTML = this.html;
        makeGrid('pageContents');
    }

}

function logout() {
    localStorage.setItem("loggedInAdmin", false);
    localStorage.setItem("loggedIn", false);
    r('loginPage');
    titleBarInit('titleBarRoot');
}