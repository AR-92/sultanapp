var signupPageHTML=/*html */`
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
<br>
<br>
<div class="container-fluid">
<div class="login-form  text-center">
    <div class="row">
        <div class="col-md-3 card align-self-center">
            <br>
            <br>
            <br>
            <a>
                <img src="./img/logo.png" style="max-width: 19%; " class="logo">
            </a>
            <small class="form-text text-muted">Please Enter Your Info <br> To Join Sultan Estate</small>
            <form id="signupForm">
                <div class="user">
                    <input type="text" class="form-control form-control-sm p" name="username"
                        placeholder="Username">
                    <small id="signupValiUsername" class="form-text text-danger" style="display:none">Your
                        Username Should be between 5 to 10 Characters long !</small>

                    <input type="text" class="form-control form-control-sm p" name="email"
                        placeholder="Eamil Address">
                    <small id="signupValiEmail" class="form-text text-danger" style="display:none">Please Enter
                        Correct Email Address !</small>

                    <input type="password" class="form-control form-control-sm p" name="password"
                        placeholder="Password">
                    <small id="signupValiPass" class="form-text text-danger" style="display:none">Your Password
                        Should be 6 Characters long !</small>

                    <button type="button" onclick="signupForm()"
                        class="btn btn-primary btn-sm round p btn-block">Join</button>
                    <small class="form-text text-muted">If you have an account</small>
                    <a onclick="mainRouter({
                        page: 'loginPage',
                        html: loginPageHTML
                    })">
                        <small class=" point form-text text-primary">
                            Back
                        </small>
                    </a>
                </div>
            </form>
            <br>
            <br>
        </div>
        <div class="col-md-9">
            <img style="max-width:64%;" src="./img/signup.png" alt="">
        </div>
    </div>

</div>
</div>
`;
function signupForm() {
    var data = $('#signupForm').serializeArray();
    var user = /^[a-z]{5,10}$/;
    if (!user.test(String(data[0].value).toLowerCase())) {
        $("#signupValiUsername").show()
    } else {
        $("#signupValiUsername").hide()
    }
    var email =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.test(String(data[1].value).toLowerCase())) {
        $("#signupValiEmail").show()
    } else {
        $("#signupValiEmail").hide()
    }
    var pass = /^.{6,}$/;
    if (!pass.test(String(data[2].value).toLowerCase())) {
        $("#signupValiPass").show()
    } else {
        $("#signupValiPass").hide()
    }
    if (user.test(String(data[0].value).toLowerCase()) && email.test(String(data[1].value).toLowerCase()) && pass
        .test(String(data[2].value).toLowerCase())) {
        // console.log("this is signup form ", data);
        createAccount(data)
        document.getElementById("signupForm").reset();
    }
}