var page = JSON.parse(localStorage.getItem("mainAdminPage"));

var db = new PouchDB('app');
var dataTablemain = [];

function makeGrid(id) {
    var gridHTML = /*html*/ `
<h4 class="text-center" id="pageHeader" style="padding-top: 5px;">

</h4>
<hr style="margin: 0px;">
<br>
<div class="container-fluid">
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="table-header">
                <div class="row">
                    <div class="col-md-6 text-left">
                    </div>
                    <div class="col-md-6 text-right">
                        <button type="button" class="btn btn-sm btn-primary round" onclick="openForm('Add')">New
                            Record</button>
                    </div>
                </div>
            </div>
            <br>
            <table class="table table-hover">
                <thead>
                    <tr id="tableHeader">
                    </tr>
                </thead>
                <tbody id="tableBody">
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>

<div class="modal fade bd-example-modal-xl-adduser text-left" id="FormModal" tabindex="-1" role="dialog"
aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-xl" style="max-width: 1034px;">
    <div class="modal-content" style="border-radius: 27px;">
        <div class="modal-header">
            <h5 class="modal-title" id="FormModalHeader"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span class="text-danger">
                    <ion-icon name="radio-button-on"></ion-icon>
                </span>
            </button>
        </div>
        <div class="modal-body" id="addForm">

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary round" data-dismiss="modal">Close</button>
            <button type="button" onclick="FormSubmit()" id="FormModalSubmit"
                class="btn btn-sm btn-primary round"></button>
        </div>
    </div>
</div>
</div>
`;
    titleBarInit('titleBarRoot');
    document.getElementById(id).innerHTML = gridHTML;
    gridinit()
}

function gridinit() {
    document.title = page.pageTitle;
    $('#pageHeader').text(page.pageHeader);
    db.find({
        selector: {
            type: 'accounts'
        }
    }).then((x) => {
        dataTablemain = x.docs;
        tableFromArray(dataTablemain);
    })
}

function openForm(value, index) {
    if (value == 'Edit') {
        renderForm(page.grid.fields, index);
    }
    if (value == 'Add') {
        renderForm(page.grid.fields, 'Add');
        document.getElementById("mainForm").reset();
    }
    $("#FormModalHeader").text(value + " " + page.pageHeader);
    $("#FormModalSubmit").text(value + " " + page.pageHeader);
    $('#FormModal').modal('show');
}


function renderForm(f, index) {
    var html = '';
    var rowHTML = '';
    var colHTML = '';
    f.forEach((r, i) => {
        rowHTML = ''
        r.row.forEach((x, i) => {
            colHTML = ''
            x.col.forEach((c) => {
                if (c.type === 'input' && c.form === true) {
                    if (index === 'Add') {
                        c.value = '';
                    } else {
                        c.value = dataTablemain[index][`${c.name}`];
                    }
                    colHTML = colHTML + `
                  <div class="col">
                  <div class="form-group">
                  <label>${c.lable}</label>
                  <input class="form-control round"  name="${c.name}" placeholder="${c.placeholder}" value="${c.value}">
                  <small id="add${page.pageHeader}Vali${c.name}" class="form-text text-danger"
                  style="display:none">${c.error}</small>
                  </div>
                  </div>
                  `;
                }
            })
            rowHTML = rowHTML + `<form id="mainForm"><div class="row">${colHTML}</div></form>`
        })
    })
    $("#addForm").html(rowHTML)
}

function tableFromArray(value) {
    var tableData = [];
    tableData = value;
    var tableRowHtml = '';
    tableData.forEach((row, i) => {
        var tableColHtml = `<td>${i+1}</td>`;
        Object.keys(row).forEach(function (key) {
            if (key !== '_id' && key !== '_rev' && key !== 'type') {
                tableColHtml = tableColHtml + `<td>${row[key]}</td>`
            }
        });
        let edit = '';
        if (page.grid.edit) {
            edit = `<span class="text-success">
              <ion-icon onclick="openForm('Edit','${i}')" name="create"></ion-icon>
          </span>`;
        }
        let del = '';
        if (page.grid.delete) {
            del = `<span class="text-danger">
                  <ion-icon name="trash" onclick="deleteRow('${row['_id']}','${i}')"></ion-icon>
              </span>`;
        }
        tableColHtml = tableColHtml + /*html*/ `
          <td style="font-size: 22px;padding: 4px;">
          ${edit}
          ${del}
          </td>
      `;
        tableRowHtml = tableRowHtml + `<tr id="deleteRow${row._id}">${tableColHtml}<tr>`;
    })
    var tableHeaderHTML = '';
    page.gridHeader.forEach((element) => {
        tableHeaderHTML = tableHeaderHTML +
            `<th scope="col">${element.charAt(0).toUpperCase() + element.slice(1)}</th>`
    })
    $("#tableHeader").html(tableHeaderHTML)
    $("#tableBody").html(tableRowHtml)
}

function FormSubmit() {
    var data = $('#mainForm').serializeArray();
    var condition = [];
    page.grid.fields.forEach((r, i) => {
        r.row.forEach((x, i) => {
            x.col.forEach((c) => {
                if (c.type === 'input' && c.form === true && c.regex ) {
                    
                    var oFormObject = document.forms['mainForm'];
                    var r = new RegExp(c.regex);
                    // console.log(!r.test(String(oFormObject.elements[c.name].value)),r);
                    condition.push(!r.test(String(oFormObject.elements[c.name].value)
                    .toLowerCase()))
                    // console.log(condition,c);
                    if (!r.test(String(oFormObject.elements[c.name].value)
                            .toLowerCase())) {
                        $(`#add${page.pageHeader}Vali${c.name}`).show()
                    } else {
                        $(`#add${page.pageHeader}Vali${c.name}`).hide()
                    }
                }
            })
        })
    })
    if (condition.every(validation)) {
        addRow(data);
        createAccount(data)
        document.getElementById("mainForm").reset();
    }
}

function addRow(value) {
    var obj = {};
    value.forEach((element) => {
        obj[element.name] = element.value
    })
    obj['_id'] = value[0].value
    obj['approved'] = false;
    obj['status'] = 'inactive';
    dataTablemain.push(obj);
    tableFromArray(dataTablemain);
}

function validation(arr) {
    return arr == false;
}

function deleteRow(value, index) {
    dataTablemain.splice(index, 1);
    tableFromArray(dataTablemain);
}