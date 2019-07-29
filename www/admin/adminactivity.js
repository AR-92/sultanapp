var adminActivityFeedHTML = /*html */ `
<style>
.card {
    border-left: 29px solid #2196F3;
    margin-right: 104px;
    margin-bottom: 15px;

}
</style>
<img src hidden onerror="getAdminActivites()">

<div class="app-activity">

<hr style="margin: 0px;">
<h4 class="text-center" style="padding-top: 5px;">
    Activity Feed
</h4>
<hr style="margin: 0px;">

<br>
<br>
<div class="container-fluid">
    <div class="login-form  ">
        <div class="row ">
            <div class="col-md-12" id="getAdminActivites">
            </div>
        </div>
    </div>
</div>
</div>
`;

function getAdminActivites() {
    // listActivity();
    activites = []
    listActivity().then((d) => {
        // console.log("list activity",d.docs)
        activites = d.docs;
        // var activites = [{
        //         type: 'adminNotifications',
        //         msg: 'you created this user',
        //         color: 'blue',
        //         time: 'July 13th 2019, 2:41:20 pm'

        //     },
        //     {
        //         type: 'adminNotifications',
        //         msg: 'you deleted this user',
        //         color: 'red',
        //         time: 'July 13th 2019, 2:41:20 pm'
        //     },
        //     {
        //         type: 'adminNotifications',
        //         msg: 'you updated this user',
        //         color: 'green',
        //         time: 'July 13th 2019, 2:41:20 pm'
        //     },
        //     {
        //         type: 'adminNotifications',
        //         msg: 'you created this user',
        //         color: 'blue',
        //         time: 'July 13th 2019, 2:41:20 pm'
        //     },
        //     {
        //         type: 'adminNotifications',
        //         msg: 'someone requested to signup you approved',
        //         color: 'yellow',
        //         time: 'July 13th 2019, 2:41:20 pm'
        //     },
        //     {
        //         type: 'adminNotifications',
        //         msg: 'you created this user',
        //         color: 'blue',
        //         time: 'July 13th 2019, 2:41:20 pm'
        //     }
        // ];
        var activitesList = ``;
        activites.forEach((element) => {
            var color = '';
            if (element.color === 'blue') {
                color = '#2196F3'
            } else if (element.color === 'red') {
                color = '#dc3545'
            } else if (element.color === 'green') {
                color = '#28a745'
            } else if (element.color === 'yellow') {
                color = '#ffc107'
            }
            var activitycard = /*html*/ `
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
        ${element.createdAt}
        </span>
        </small>
        </div>
        </div>
        
        </div>
        </div>
        `;
            activitesList = activitesList + activitycard;
        })
        // return activitesList;
        $("#getAdminActivites").html(activitesList)
    })
}