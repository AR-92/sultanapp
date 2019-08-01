var db = new PouchDB('app');

function createAccount(value) {
    var obj = {};
    value.forEach((element) => {
        obj[element.name] = element.value
    })
    obj['_id'] = value[0].value
    obj['approved'] = false;
    obj['status'] = 'inactive';
    obj['type'] = 'accounts';
    checkAccount(value[0].value).then((x) => {
        if (x === true) {
            db.put(obj);
            createActivity({msg:`${obj.username} has requested to signup.`,color:"blue"});
            alert.note(3000, "blue", `
            <small class="form-text text-muted">
            Your Account is Created and Waiting For Approval ! <br>
            Go Back And Log In After The Approval
            </small>
            `)
        } else {
            console.log("username already exsits")
            alert.note(3000, "red", `
            <small class="form-text text-muted">
            Username Already Exists
            </small>
            `)
        }
    })
}

function deleteAccount() {}

function updateAccount() {}

function checkAccount(value) {
    return new Promise(function (resolve, reject) {
        db.get(value).then(function (doc) {
            if (doc) {
                resolve(false)
            }
        }).catch(function (err) {
            if (err.status === 404) {
                resolve(true)
            }
        });
    })
}

function loginAccount(value) {
    // console.log("login form ",value)
    return new Promise((resolve, reject) => {
        db.get(value[0].value).then(function (doc) {
            if (doc.password === value[1].value) {
                // alert.note(3000, "blue", `
                // <small class="form-text text-muted">
                // Wellcome ${value[0].value} !
                // </small>
                // `)
                resolve(true)
            }else{
                alert.note(3000, "blue", `
                <small class="form-text text-muted">
                Wrong Username or Password !
                </small>
                `)
                resolve(false)
            }
        }).catch(function (err) {
            if (err.status === 404) {
                alert.note(3000, "blue", `
                <small class="form-text text-muted">
                Wrong Username or Password !
                </small>
                `)
                resolve(false)
            }
        });
    })
}

function approveAccount() {}

function listAccount() {}

function getAccount() {}

function searchAccount() {}