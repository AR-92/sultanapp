var adminNotifications = /*html*/ `
<style>
.card {
    border-left: 29px solid #2196F3;
    margin-right: 104px;
    margin-bottom: 15px;
}
</style>
<div class="app-notifications">

<hr style="margin: 0px;">
<h4 class="text-center" style="padding-top: 5px;">
    Notifications
</h4>
<hr style="margin: 0px;">

<br>
<br>
<div class="container-fluid">
    <div class="login-form  ">
        <div class="row ">
            <div class="col-md-12">
     ${getAdminNotifications()}
            </div>
        </div>
    </div>
</div>
</div>
`;

function getAdminNotifications() {
    var notifications = [{
            type: 'adminNotifications',
            msg: 'you created this user',
            color: 'blue'
        },
        {
            type: 'adminNotifications',
            msg: 'you deleted this user',
            color: 'red'
        },
        {
            type: 'adminNotifications',
            msg: 'you updated this user',
            color: 'green'
        },
        {
            type: 'adminNotifications',
            msg: 'you created this user',
            color: 'blue'
        },
        {
            type: 'adminNotifications',
            msg: 'someone requested to signup',
            color: 'yellow'
        },
        {
            type: 'adminNotifications',
            msg: 'you created this user',
            color: 'blue'
        }
    ];
    var notiList = ``;
    notifications.forEach((element) => {
        var color = '';
        if (element.color === 'blue') {
            color = '#2196F3'
        } else if (element.color === 'red') {
            color = '#dc3545'
        } else if (element.color === 'green') {
            color = '#28a745'
        }else if (element.color === 'yellow') {
            color = '#ffc107'
        }
        var card = /*html*/ `
        <div class="card round" style="border-left: 29px solid ${color};
        margin-right: 104px;">
        <div class="card-body">
        <div class="row">
            <div class="col-md-6">
            <small class="form-text text-muted">
            ${element.msg}
            </small>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-4 ">
            <small class="form-text text-right ">
            <span class="text-primary" style="margin: 15px;">
            Allow
            </span>
            <span class="text-danger" style="margin: 15px;">
            Don't allow
            </span>
            </small>
            
            </div>
            </div>
            
            </div>
            </div>
            `;
        notiList = notiList + card;
    })
    return notiList;
}