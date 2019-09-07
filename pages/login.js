
var loginPage = {
    html: /*html */ `
    <style>
    .p {
        border-radius: 50px !important;
        margin: 10px;
    }
    
    .n {
        border-top-right-radius: 50px !important;
        border-bottom-right-radius: 50px !important;
    }
    
    .card {
        border-radius: 21%;
        border-color: white;
    }
    </style>
    <div id="app-login">
    <br>
    <div class="container-fluid">
        <div class="login-form  text-center">
            <div class="row">
                <div class="col-md-3 card align-self-center">
                    <a>
                        <img onclick="loginPage.mainAdminLogin()" src="./img/logo.png" style="max-width: 19%; " class="logo">
                    </a>
                    <small class="form-text text-muted">We will never share your <br> email with any one !</small>
    
                    <form id="loginForm">
                        <div class="user">
                            <input type="text" id="usernameLogin" class="form-control form-control-sm p"
                                name="username" placeholder="Username">
                            <input type="password" class="form-control form-control-sm p" name="password"
                                placeholder="Password">
                            <button type="button" onclick="loginPage.loginForm()"
                                class="btn btn-primary btn-sm round p btn-block">Log In</button>
                            <small class="form-text text-muted">If you don't have an account</small>
                            <a onclick="r('signupPage')">
                                <small class=" point form-text text-success">
                                    Sign Up Here !
                                </small>
                            </a>
                        </div>
                    </form>
                    <br>
                    <br>
                </div>
                <div class="col-md-9">
                    <img style="max-width:64%;" src="./img/login.png" alt="">
                </div>
            </div>
        </div>
    </div>
    </div>
    `,
    loginOnLoad: function () {
        var loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
        if (loggedIn === true) {
            r('purchasePage')
        } else {
            localStorage.setItem("loggedIn", false);
        }
    },
    checklogin: function () {
        var loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
        var loggedInAdmin = JSON.parse(localStorage.getItem("loggedInAdmin"));
        if (loggedIn === true) {
            r('purchasePage')
        }
        if (loggedInAdmin === true) {
            r('AdminAccountsPage');
        }
    },
    mainAdminLogin: function () {
        if ($("#usernameLogin").val() === "admin123") {
            localStorage.setItem("loggedIn", false);
            localStorage.setItem("loggedInAdmin", true);
            r('AdminAccountsPage')
        }
    },
    loginForm: function () {
        var data = $('#loginForm').serializeArray();
        loginAccount(data).then((x) => {
            console.log("this is login form promise", x)
            if (x === true) {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("username", data[0].value);
                r('purchasePage')
                titleBarInit('titleBarRoot');

            }
        })
    },
    init: function () {
        document.getElementById('root').innerHTML = this.html;
        this.checklogin();
        this.loginOnLoad();
    }

};
