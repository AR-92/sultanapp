var db = new PouchDB('app');

function createActivity(value) {
    value.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    value.type = 'AdminActivityFeed';
    // value.color = 'AdminActivityFeed';
    db.post(value).then(() => {
        console.log("fed is put");
    });
}

function deleteActivity() {}

function updateActivity() {}

function checkActivity() {}

function approveActivity() {}

function listActivity() {
    return new Promise((resolve, reject) => {
        db.find({
            selector: {
                type: 'AdminActivityFeed'
            }
        }).then((x) => {
            resolve(x) 
        })
    })
}

function getActivity() {}

function searchActivity() {}