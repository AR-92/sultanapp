// var titleBarHTML = /*html*/ `
// <div id="titleBarRoot" onload='titleBarInit("titleBarRoot")'></div>
// `;

function titleBarInit(id) {
    var login = JSON.parse(localStorage.getItem("loggedIn"));
    var loginAdmin = JSON.parse(localStorage.getItem("loggedInAdmin"));
    var username =localStorage.getItem("username");
    console.log("titlebar i am loaded",loginAdmin,username)

    var linkTemp = '';
    var navLinks = JSON.parse(localStorage.getItem("navbarLinks"));
    navLinks.forEach((element) => {
        linkTemp = linkTemp + `<a class="dropdown-item"  onclick="mainRouter({
            page: '${element.name}',
            html: ${element.link}
        })">${element.name} </a>`;
    })
    var logo = '<img src="./img/logo.png" class="invisible" style="max-width: 39%;" ></img>';
    var links = '';
    if (login) {
        var logo = `
    <img src="./img/logo.png" style="max-width: 39%;" ></img>
    `;
        var links = `
    <div class="dropdown">
    <button class="btn btn-secondary taskBaruser btn-sm round dropdown-toggle" type="button"
        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        @${username}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
${linkTemp}
        <button class="dropdown-item" onclick="logout()"><span class="text-danger">Log Out</span></button>
    </div>
</div>
    `;
    }
    if(loginAdmin){
        var logo = `
        <img src="./img/logo.png" style="max-width: 39%;" ></img>
        `;
        // <a class="dropdown-item" onclick="toggleDeveloperConsole()">Developer Tools</a>
        // <a class="dropdown-item" onclick="mainRouter({
        //     page: 'AdminNotificaionPage',
        //     html: adminNotifications
        // })">Notifications</a>
        // <a class="dropdown-item" onclick="mainRouter({
        //     page: 'AdminSettingsPage',
        //     html: adminSettingsPage
        // })">Settings</a>
        // <a class="dropdown-item" onclick="mainRouter({
        //     page: 'AdminPermissionsPage',
        //     html: adminPermissionPage
        // })">Permissions</a>
        var links = `
        <div class="dropdown">
        <button class="btn btn-secondary taskBaruser btn-sm round dropdown-toggle" type="button"
            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            @SuperAdmin
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" onclick="mainRouter({
            e:event,
            page: 'AdminAccountsPage',
            html: mainAdminPageHTML
        })">Accounts</a>
        <a class="dropdown-item" onclick="mainRouter({
            page: 'AdminActivityPage',
            html: adminActivityFeedHTML
        })">Activities</a>
        <a class="dropdown-item" onclick="logout()"><span class="text-danger">Log Out</span></a>
        </div>
    </div>
        `;  
    }
    var titlebarComponents = /*html*/ `
<style>
        .nav-link,
        .navbar {
            padding: 0rem 1rem;
        }

        .taskBar {
            margin: 2px;

        }

        .taskBaruser {
            margin-top: 8px;
            margin-right: 15px;
            margin-bottom: 8px;
            margin-left: 8px;
        }
    </style>
    <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">
    </a>
    <form class="form-inline">
    ${links}
    </form>
    </nav>
    <hr style="margin: 0px;">
    `;
    // ${logo}
    // <span class="text-success">
    // <ion-icon name="radio-button-on" onclick="appMinimize()"></ion-icon>
    // </span>
    // <span class="text-warning">
    // <ion-icon name="radio-button-on" onclick="appMaximize()"></ion-icon>
    // </span>
    // <span class="text-danger">
    // <ion-icon name="radio-button-on" onclick="appClose()"></ion-icon>
    // </span>
    // <ion-icon name="radio-button-on" id="" onclick="window.top.close();"></ion-icon>
    if(login===false && loginAdmin===false || loginAdmin===undefined ){
        document.getElementById(id).innerHTML='';
    }else{
        document.getElementById(id).innerHTML=titlebarComponents;
    }
}