var settingsPageHTML =/*html */ `
<style>
.p {
    border-radius: 50px !important;
    margin: 10px;
}

hr {
    box-sizing: content-box;
    border: 0;
    border-top: 2px solid rgba(0, 0, 0, .1);
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
<div class="app-settings">


<hr style="margin: 0px;">
<h4 class="text-center" style="padding-top: 5px;">
    Settings
</h4>
<hr style="margin: 0px;">

<br>
<br>
<div class="container-fluid">
    <div class="login-form  text-center">
        <div class="row">
            <div class="col-md-3 card align-self-center">
                <form id="loginForm">
                    <div class="user">
                        <input type="text" class="form-control form-control-sm p" name="username"
                            placeholder="Username">
                        <input type="text" class="form-control form-control-sm p" name="username"
                            placeholder="Email Address">
                        <input type="password" class="form-control form-control-sm p" name="password"
                            placeholder="Old Password">
                        <input type="password" class="form-control form-control-sm p" name="password"
                            placeholder="New Password">
                        <div class="form-group row">
                            <div class="col-md-6">
                                <button type="button"
                                    class="btn btn-primary btn-sm round p btn-block">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
                <br>
                <br>
            </div>
            <div class="col-md-9">
                <img style="max-width:64%;" src="./img/settings.png" alt="">
            </div>
        </div>
    </div>
</div>
</div>
`;