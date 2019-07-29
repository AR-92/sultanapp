function allAppData() {


    var navbarLinks = [
        // {
        //     name: "Reports",
        //     var: "reportsPage"
        // },
        // {
        //     name: "Sales",
        //     var: "salesPage"
        // },
        // {
        //     name: "Purchase",
        //     var: "purchasePage"
        // },
        {
            name: "Notifications",
            link: "appNotifications"
        },
        {
            name: "Settings",
            link: "settingsPageHTML"
        },
        {
            name: "Activity",
            link: "activityFeedHTML"
        },
        // {
        //     name: "Permissions",
        //     link: "permissionPage"
        // }
    ];

    var mainAdminPage = {
        pageTitle: 'Accounts',
        pageHeader: 'Accounts',
        gridHeader: ["#", "username", "email", "password", "approved", "status", "actions"],
        grid: {
            edit: true,
            delete: true,
            createNew: true,
            actions: true,
            createNewLable: 'New Records',
            fields: [{
                row: [{
                    col: [{
                            type: 'input',
                            name: 'username',
                            lable: 'Username',
                            regex: '^[a-z]{5,10}$',
                            error: 'Username Should be between 5 to 10 Characters !',
                            table: true,
                            form: true,
                            value: '',
                            placeholder: 'Enter Username',
                        },
                        {
                            type: 'input',
                            name: 'email',
                            lable: 'Email Address',
                            // regex: '^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$',
                            error: 'Please enter a valid Email Address !',
                            table: true,
                            form: true,
                            value: '',
                            placeholder: 'Enter Username',
                        },
                        {
                            type: 'input',
                            name: 'password',
                            lable: 'Password',
                            regex: '^.{6,}$',
                            error: 'Password Should be 6 Characters long !',
                            table: true,
                            form: true,
                            value: '',
                            placeholder: 'Enter Password',
                        },
                        {
                            lable: 'Status',
                            table: true,
                            form: false,
                        },
                        {
                            lable: 'Approved',
                            table: true,
                            form: false,
                        },
                    ]
                }]
    
            }]
        },
    };

    var reportsPage = {
        pageTitle: 'Accounts',
        pageHeader: 'Accounts',
    };
    var salesPage = {
        pageTitle: 'Accounts',
        pageHeader: 'Accounts',
    };
    var purchasePage = {
        pageTitle: 'Accounts',
        pageHeader: 'Accounts',
    };
    var navLogoLink = './img/logo.png';
    var loginPageImg = './img/login.png';
    var signupPageImg = './img/signup.png';
    var settingPageImg = './img/settings.png';
    var workingPageImg = './img/working.png';

    localStorage.setItem("mainAdminPage", JSON.stringify(mainAdminPage));
    localStorage.setItem("reportsPage", JSON.stringify(reportsPage));
    localStorage.setItem("salesPage", JSON.stringify(salesPage));
    localStorage.setItem("purchasePage", JSON.stringify(purchasePage));
    localStorage.setItem("navbarLinks", JSON.stringify(navbarLinks));
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("navLogoLink", './img/logo.png');
    localStorage.setItem("loginPageImg", './img/login.png');
    localStorage.setItem("signupPageImg", './img/signup.png');
    localStorage.setItem("settingPageImg", './img/settings.png');
    localStorage.setItem("workingPageImg", './img/working.png');

}