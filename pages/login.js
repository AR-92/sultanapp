var loginPageHTML = /*html */ `
<img src hidden onerror="checklogin()">

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
<img src hidden onerror="loginOnLoad()">
<div id="app-login">
<br>
<div class="container-fluid">
    <div class="login-form  text-center">
        <div class="row">
            <div class="col-md-3 card align-self-center">
                <a>
                    <img onclick="mainAdminLogin()" src="./img/logo.png" style="max-width: 19%; " class="logo">
                </a>
                <small class="form-text text-muted">We will never share your <br> email with any one !</small>

                <form id="loginForm">
                    <div class="user">
                        <input type="text" id="usernameLogin" class="form-control form-control-sm p"
                            name="username" placeholder="Username">
                        <input type="password" class="form-control form-control-sm p" name="password"
                            placeholder="Password">
                        <button type="button" onclick="loginForm()"
                            class="btn btn-primary btn-sm round p btn-block">Log In</button>
                        <small class="form-text text-muted">If you don't have an account</small>
                        <a onclick="mainRouter({
                            page: 'signupPage',
                            html: signupPageHTML
                        })">
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
`;

function loginOnLoad() {
    console.log("login loaded");
    var loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    console.log("loggrd in ",loggedIn)
    if (loggedIn === true) {
        mainRouter({
            page: 'purchasePage',
            html: purchasePage
        })
    } else {
        localStorage.setItem("loggedIn", false);
    }
}

function loginForm() {
    var data = $('#loginForm').serializeArray();
    loginAccount(data).then((x) => {
        console.log("this is login form promise", x)
        if (x === true) {
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("username", data[0].value);
            // window.location.href = "./sales.html";
            mainRouter({
                page: 'purchasePage',
                html: purchasePage
            })
        titleBarInit('titleBarRoot');

        }
    })
}

function mainAdminLogin() {
    if ($("#usernameLogin").val() === "admin123") {
        localStorage.setItem("loggedIn", false);
        localStorage.setItem("loggedInAdmin", true);
        mainRouter({
            page: 'mainAdminPage',
            html: mainAdminPageHTML
        })
        // window.location.href = "./mainAdmin.html";
    }
}
function checklogin(){
    var loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    var loggedInAdmin = JSON.parse(localStorage.getItem("loggedInAdmin"));
    if(loggedIn===true){
        mainRouter({
            page: 'purchasePage',
            html: purchasePage
        })
    }
    if(loggedInAdmin===true){
        mainRouter({
            page: 'mainAdminPage',
            html: mainAdminPageHTML
        })
    }
    // console.log()
}