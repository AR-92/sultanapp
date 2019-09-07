var purchasePage = {
    // <h4 class="text-center" style="padding-top: 5px;">
    //     Purchase
    // </h4>
    // <hr style="margin: 0px;">
    
    html: /*html*/ `
    <style>
    .card {
        border-radius: 25px !important;
        padding: 30px;
    }
    </style>
    <div class="app-notifications">
    
    <div class="container-fluid">

                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">File Number</th>
                        <th scope="col">Area</th>
                        <th scope="col">Moza</th>
                        <th scope="col">Offered By</th>
                        <th scope="col">Offered Price</th>
                        <th scope="col">Owner</th>
                        <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody id="purchaseTableData">
                    </tbody>
                </table>

    </div>
    </div>
    
                <div class="modal fade editPurchaseForm text-left"  tabindex="-1" role="dialog"
    aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" style="max-width: 1034px;">
        <div class="modal-content" style="border-radius: 27px;">
            <div class="modal-header">
                <h5 class="modal-title" >Edit Purchase</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="text-danger">
                        <ion-icon name="radio-button-on"></ion-icon>
                    </span>
                </button>
            </div>
            <div class="modal-body">
            <form id="editPurchaseForm">
            <div class="row">
            <div class="form-group col text-primary">
            <h5>General</h5>
            </div>
            </div>
            <div class="row">
            <div class="form-group col">
            <label>File Number</label>
            <input class="form-control round"  name="fileNumber" placeholder="" value="hhahah">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
            <div class="form-group col">
            <label>Area (Kanal, marla , sq feet)</label>
            <input class="form-control round"  name="area" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
            <div class="form-group col">
            <label>Moza</label>
            <input class="form-control round"  name="moza" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
            </div>
            <div class="row">
            <div class="form-group col">
            <label>Offered Price</label>
            <input class="form-control round"  name="offeredPrice" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
            <div class="form-group col">
            <label>Offered By</label>
            <input class="form-control round"  name="offeredBy" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
            <div class="form-group col">
            <label>Land Owner Name</label>
            <input class="form-control round"  name="landOwnerName" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
            </div>
            <div class="row">
            <div class="form-group col text-primary">
            <h5>Token</h5>
            </div>
            </div>
            <div class="row">
    
            <div class="form-group col">
            <label>Token Money</label>
            <input class="form-control round"  name="tokanMoney" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
    
            <div class="form-group col">
            <label>Token Types</label>
            <input class="form-control round"  name="tokenType" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
    
            <div class="form-group col">
            <label>Token Remarks</label>
            <textarea class="form-control round"  name="tokanRemarks"></textarea>
            </div>
    
            </div>
            <div class="row">
    
            <div class="form-group col">
            <label>Token Expense Type</label>
            <input class="form-control round"  name="tokenExpenceType" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
    
            <div class="form-group col">
            <label>Expense </label>
            <input class="form-control round"  name="tokenExpenceAmount" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
    
            <div class="form-group col">
            <br>
            <button type="button" class="btn btn-sm btn-primary round">Add</button>
            </div>
    
            </div>  
            <div class="row">
            <div class="form-group col text-primary">
            <h5>Biana</h5>
            </div>
            </div>
            <div class="row">
    
            <div class="form-group col">
            <label>Biana Amount</label>
            <input class="form-control round"  name="bianaAmount" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
    
            <div class="form-group col">
            <label>Due Date</label>
            <input class="form-control round"  name="dueDate" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
    
            <div class="form-group col">
            <label>Biana Remarks</label>
            <textarea class="form-control round"  name="bianaRemarks"></textarea>
            </div>
    
            </div>
            <div class="row">
    
            <div class="form-group col">
            <label>Biana Expense Type</label>
            <input class="form-control round"  name="bianaExpenceType" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
    
            <div class="form-group col">
            <label>Expense </label>
            <input class="form-control round"  name="bianaExpenceAmount" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div>
    
            <div class="form-group col">
            <br>
            <button type="button" class="btn btn-sm btn-primary round">Add</button>
            </div>
    
            </div>
            <div class="row">
            <div class="form-group col text-primary">
            <h5>Full Payment</h5>
            </div>
            </div>
            <div class="row">
    
            <div class="form-group col">
            <label>Full Payment</label>
            <input class="form-control round"  name="fullPayment" placeholder="" value="">
            <input class="form-control round" hidden name="_id" placeholder="" value="">
            <input class="form-control round" hidden name="_rev" placeholder="" value="">
            <small id="" class="form-text text-danger"
            style="display:none"></small>
            </div> 
    
            <div class="form-group col">
            <label>Full Payment Remarks</label>
            <textarea class="form-control round"  name="fullPaymentRemarks"></textarea>
            </div>
    
            </div>
            </form>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary round" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-danger round" onclick="deletePurchaseForm()">Delete</button>
            <button type="button" class="btn btn-sm btn-primary round" onclick="editPurchaseFormSubmit()">Edit</button>
                </div>
                </div>
                </div>
                </div>
                <div class="modal fade addPurchaseForm text-left"  tabindex="-1" role="dialog"
                aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl" style="max-width: 1034px;">
                    <div class="modal-content" style="border-radius: 27px;">
                        <div class="modal-header">
                            <h5 class="modal-title" >Add Purchase</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span class="text-danger">
                                    <ion-icon name="radio-button-on"></ion-icon>
                                </span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <form id="addPurchaseFormdata">
                        <div class="row">
                        <div class="form-group col text-primary">
                        <h5>General</h5>
                        </div>
                        </div>
                        <div class="row">
                        <div class="form-group col">
                        <label>File Number</label>
                        <input class="form-control round"  name="fileNumber" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
                        <div class="form-group col">
                        <label>Moza</label>
                        <input class="form-control round"  name="moza" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
                        <div class="form-group col">
                        <label>Offered Price</label>
                        <input class="form-control round"  name="offeredPrice" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
    
                        <div class="form-group col">
                        <label>Kanal</label>
                        <input class="form-control round"  name="kanal" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
                        <div class="form-group col">
                        <label>Marla</label>
                        <input class="form-control round"  name="marla" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
                        <div class="form-group col">
                        <label>Sq feet</label>
                        <input class="form-control round"  name="sqfeet" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
                        <div class="form-group col">
                        <label>Add</label>
                        <button type="button" class="btn btn-primary btn-block round" onclick="purchasePage.addgeneral()">Add</button>
                        </div>
                        </div>
                        <div id="addnewgeneraltable">
                        </div>
                        <div class="row">
                        <div class="form-group col">
                        <label>Offered By</label>
                        <input class="form-control round"  name="offeredBy" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
                        <div class="form-group col">
                        <label>Land Owner Name</label>
                        <input class="form-control round"  name="landOwnerName" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
                        </div>
                        <div class="row">
                        <div class="form-group col text-primary">
                        <h5>Token</h5>
                        </div>
                        </div>
                        <div class="row">
    
                        <div class="form-group col">
                        <label>Token Money</label>
                        <input class="form-control round"  name="tokanMoney" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
    
                        <div class="form-group col">
                        <label>Token Types</label>
                        <input class="form-control round"  name="tokenType" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
    
                        <div class="form-group col">
                        <label>Token Remarks</label>
                        <textarea class="form-control round"  name="tokanRemarks"></textarea>
                        </div>
    
                        </div>
                        <div class="row">
    
                        <div class="form-group col">
                        <label>Token Expense Type</label>
                        <input class="form-control round"  id="tokenExpenceType" name="tokenExpenceType" placeholder="" value="">
                        <small class="form-text text-danger"
                        style="display:none"></small>
                        </div>
    
                        <div class="form-group col">
                        <label>Expense </label>
                        <input class="form-control round" id="tokenExpenceAmount"  name="tokenExpenceAmount" placeholder="" value="">
                        <small class="form-text text-danger"
                        style="display:none"></small>
                        </div>
    
                        <div class="form-group col">
                        <label>Add To The List</label>
                        <button type="button" class="btn btn-primary btn-block round" onclick="purchasePage.addnewExpense('#tokenexpensetable','#tokenExpenceType','#tokenExpenceAmount')">Add</button>
                        </div>
    
                        </div>  
                        <div  id="tokenexpensetable">
                        </div>
                        <div class="row">
                        <div class="form-group col text-primary">
                        <h5>Biana</h5>
                        </div>
                        </div>
                        <div class="row">
    
                        <div class="form-group col">
                        <label>Biana Amount</label>
                        <input class="form-control round"  name="bianaAmount" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
    
                        <div class="form-group col">
                        <label>Due Date</label>
                        <input class="form-control round"  name="dueDate" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
    
                        <div class="form-group col">
                        <label>Biana Remarks</label>
                        <textarea class="form-control round"  name="bianaRemarks"></textarea>
                        </div>
    
                        </div>
                        <div class="row">
    
                        <div class="form-group col">
                        <label>Biana Expense Type</label>
                        <input class="form-control round"  name="bianaExpenceType" id="bianaExpenceType" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
    
                        <div class="form-group col">
                        <label>Expense </label>
                        <input class="form-control round"  name="bianaExpenceAmount" id="bianaExpenceAmount" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div>
    
                        <div class="form-group col">
                        <label>Add To The List</label>
                        <button type="button" class="btn btn-primary btn-block round"  onclick="purchasePage.addnewExpense('#bianaexpensetable','#bianaExpenceType','#bianaExpenceAmount')">Add</button>
                        </div>
    
                        </div>
                        <div  id="bianaexpensetable">
                        </div>
                        <div class="row">
                        <div class="form-group col text-primary">
                        <h5>Full Payment</h5>
                        </div>
                        </div>
                        <div class="row">
    
                        <div class="form-group col">
                        <label>Full Payment</label>
                        <input class="form-control round"  name="fullPayment" placeholder="" value="">
                        <small id="" class="form-text text-danger"
                        style="display:none"></small>
                        </div> 
    
                        <div class="form-group col">
                        <label>Full Payment Remarks</label>
                        <textarea class="form-control round"  name="fullPaymentRemarks"></textarea>
                        </div>
    
                        </div>
                        </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-secondary round" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-sm btn-primary round" onclick="addPurchaseFormSubmit()">Add</button>
    
                            </div>
                            </div>
                            </div>
                            </div>
                `,
    db: new PouchDB('app'),
    dataTablepurchase: [],
    formData: {
        general: [{
            fileNumber: "2341234",
            moza: "moza",
            offeredPrice: "1223222",
            area: {
                kanal: "33",
                marla: "33",
                sqFeet: "33",
            },
        }],
        offeredBy: "jamal",
        landOwnerName: "faisal",
        bianaAmount: "234231",
        bianaExpence: [{
            bianaExpenceType: "biana expence",
            bianaExpenceAmount: "2342",
        }],
        bianaRemarks: "biana phase 4",
        dueDate: "3/3/2019",
        fullPayment: "12341234",
        fullPaymentRemarks: "dha phase 4 full payment remarks",
        tokanMoney: "2312",
        tokanRemarks: "dha phase 4",
        tokenExpenceAmount: "214",
        tokenExpence: [{
            tokenType: "confirm",
            tokenExpenceType: "token expene",
        }]
    },
    getdata: function () {
        // console.log("purchaseInit");
        this.db.find({
            selector: {
                type: 'purchase'
            },
            fields: ['_id', 'fileNumber', 'area', 'moza', 'offeredBy', 'offeredPrice', 'landOwnerName'],
        }).then((x) => {
            this.dataTablepurchase = x.docs;
            var htmldata = '';
            this.dataTablepurchase.forEach((row, i) => {
                var tableColHtml = `<td>${i+1}</td>`;
                Object.keys(row).forEach(function (key) {
                    if (key !== '_id' && key !== '_rev' && key !== 'type') {
                        tableColHtml = tableColHtml + `<td>${row[key]}</td>`
                    }
                });
                tableColHtml = tableColHtml + /*html*/ `
                <td>    <span  class="text-primary" onclick="purchasePage.editForm('${row._id}')"><ion-icon name="eye"></ion-icon> </span></td>
            `;
                htmldata = htmldata + `<tr id="deleteRow${row._id}">${tableColHtml}<tr>`;


            })
            console.log("purchaseInit data", this.dataTablepurchase);
            // tableFromArray(dataTablepurchase);
            $('#purchaseTableData').html(htmldata)
        })
    },
    addForm: function () {
        document.getElementById('addPurchaseFormdata').reset();
        $('#addnewgeneraltable').empty();
        $('#tokenexpensetable').empty();
        $('#bianaexpensetable').empty();
        $('.addPurchaseForm').modal('show');
    },
    addgeneral: function () {
        var id = new Date().valueOf();
        var t = `
        <div class="row" id="${id}">
        <div class="form-group col">
        <input class="form-control round" disabled  name="fileNumber" placeholder="" value="${id}">
        </div>
        <div class="form-group col">
        <input class="form-control round" disabled  name="moza" placeholder="" value="${id}">
        </div>
        <div class="form-group col">
        <input class="form-control round" disabled  name="offeredPrice" placeholder="" value="${id}">
        </div>
    
        <div class="form-group col">
        <input class="form-control round" disabled name="area" placeholder="" value="${id}">
        </div>
        <div class="form-group col">
        <input class="form-control round" disabled name="area" placeholder="" value="${id}">
        </div>
        <div class="form-group col">
        <input class="form-control round" disabled  name="area" placeholder="" value="${id}">
        </div>
        <div class="form-group col">
        <button type="button" class="btn btn-danger btn-block round" onclick="purchasePage.deleteRow(${id})">Remove</button>
        </div>
        </div>
        `;
        $('#addnewgeneraltable').append(t);
    },
    addnewExpense: function (appendId, typeId, ammountId) {
        // console.log(appendId, typeId, ammountId)
        // console.log("addnewTokenExpense()",$('#tokenExpenceType').val(),$('#tokenExpenceAmount').val(),$('#tokenExpenceAmount').val()==="");
        if ($(typeId).val() !== "" && $(ammountId).val() !== "") {
            var id = new Date().valueOf();
            var t = `
            <div class="row" id="${id}">
            <div class="form-group col">
            <input class="form-control round"  disabled value="${$(typeId).val()}">
            </div>
            
            <div class="form-group col">
            <input class="form-control round" disabled value="${$(ammountId).val()}">
            </div>
            
            <div class="form-group col">
            <button type="button" class="btn btn-block btn-danger round" onclick="purchasePage.deleteRow(${id})">Remove</button>
            </div>
            
            </div>
            `;
            $(appendId).append(t);
            $(typeId).val("");
            $(ammountId).val("");
        }
    },
    deleteRow: function (id) {
        $(`#${id}`).remove()
    },
    deleteForm: function () {
        var data = $('#editPurchaseForm').serializeArray();
        var obj = {};
        data.forEach((element) => {
            obj[element.name] = element.value
        })
        obj['type'] = 'purchase';
        db.remove(obj).then(() => {
            console.log("editPurchaseForm ", obj);
            purchaseInit()
            $('.editPurchaseForm').modal('hide');
        })
    },
    editForm(id) {
        db.get(id).then((doc) => {
            for (var i = 0; i < $('#editPurchaseForm')[0].length; i++) {
                if ($('#editPurchaseForm')[0][0].localName === 'input') {
                    $('#editPurchaseForm')[0][i].value = doc[$('#editPurchaseForm')[0][i].name]
                    // console.log("editPurchaseForm",$('#editPurchaseForm')[0][i].value,doc[$('#editPurchaseForm')[0][i].name]);
                }
            }

            $('.editPurchaseForm').modal('show');
        })
    },
    init: function () {
        document.getElementById('root').innerHTML = this.html;
        this.getdata();
    },
}


// function purchaseInit() {
//     console.log("purchaseInit");
//     db.find({
//         selector: {
//             type: 'purchase'
//         },
//         fields: ['_id', 'fileNumber', 'area', 'moza', 'offeredBy', 'offeredPrice', 'landOwnerName'],
//     }).then((x) => {
//         dataTablepurchase = x.docs;
//         var htmldata = '';
//         dataTablepurchase.forEach((row, i) => {
//             var tableColHtml = `<td>${i+1}</td>`;
//             Object.keys(row).forEach(function (key) {
//                 if (key !== '_id' && key !== '_rev' && key !== 'type') {
//                     tableColHtml = tableColHtml + `<td>${row[key]}</td>`
//                 }
//             });
//             tableColHtml = tableColHtml + /*html*/ `
//             <td>    <span  class="text-primary" onclick="editPurchaseForm('${row._id}')"><ion-icon name="eye"></ion-icon> </span></td>
//         `;
//             htmldata = htmldata + `<tr id="deleteRow${row._id}">${tableColHtml}<tr>`;


//         })
//         console.log("purchaseInit data", dataTablepurchase);
//         // tableFromArray(dataTablepurchase);
//         $('#purchaseTableData').html(htmldata)
//     })
// }

// function addnewgeneral() {
//     var id = new Date().valueOf();
//     var t = `
//     <div class="row" id="${id}">
//     <div class="form-group col">
//     <input class="form-control round" disabled  name="fileNumber" placeholder="" value="">
//     </div>
//     <div class="form-group col">
//     <input class="form-control round" disabled  name="moza" placeholder="" value="">
//     </div>
//     <div class="form-group col">
//     <input class="form-control round" disabled  name="offeredPrice" placeholder="" value="">
//     </div>

//     <div class="form-group col">
//     <input class="form-control round" disabled name="area" placeholder="" value="">
//     </div>
//     <div class="form-group col">
//     <input class="form-control round" disabled name="area" placeholder="" value="">
//     </div>
//     <div class="form-group col">
//     <input class="form-control round" disabled  name="area" placeholder="" value="">
//     </div>
//     <div class="form-group col">
//     <button type="button" class="btn btn-danger btn-block round" onclick="removerow(${id})">Remove</button>
//     </div>
//     </div>
//     `;
//     $('#addnewgeneraltable').append(t);
// }

// function removerow(id) {
//     $(`#${id}`).remove()
// }

// function addnewExpense(appendId, typeId, ammountId) {
//     console.log(appendId, typeId, ammountId)
//     // console.log("addnewTokenExpense()",$('#tokenExpenceType').val(),$('#tokenExpenceAmount').val(),$('#tokenExpenceAmount').val()==="");
//     if ($(typeId).val() !== "" && $(ammountId).val() !== "") {
//         var id = new Date().valueOf();
//         var t = `
//         <div class="row" id="${id}">
//         <div class="form-group col">
//         <input class="form-control round"  disabled value="${$(typeId).val()}">
//         </div>

//         <div class="form-group col">
//         <input class="form-control round" disabled value="${$(ammountId).val()}">
//         </div>

//         <div class="form-group col">
//         <button type="button" class="btn btn-block btn-danger round" onclick="removerow(${id})">Remove</button>
//         </div>

//         </div>
//         `;
//         $(appendId).append(t);
//         $(typeId).val("");
//         $(ammountId).val("");
//     }
// }

// function editPurchaseForm(id) {
//     db.get(id).then((doc) => {
//         for (var i = 0; i < $('#editPurchaseForm')[0].length; i++) {
//             if ($('#editPurchaseForm')[0][0].localName === 'input') {
//                 $('#editPurchaseForm')[0][i].value = doc[$('#editPurchaseForm')[0][i].name]
//                 // console.log("editPurchaseForm",$('#editPurchaseForm')[0][i].value,doc[$('#editPurchaseForm')[0][i].name]);
//             }
//         }

//         $('.editPurchaseForm').modal('show');
//     })
// }

// function addPurchaseForm() {
//     $('.addPurchaseForm').modal('show');
// }

// function addPurchaseFormSubmit() {
//     var data = $('#addPurchaseFormdata').serializeArray();
//     var obj = {};
//     data.forEach((element) => {
//         obj[element.name] = element.value
//     })
//     obj['type'] = 'purchase';
//     db.post(obj).then(() => {
//         console.log("addPurchaseFormdata ", obj);
//         purchaseInit()
//         document.getElementById("addPurchaseFormdata").reset();
//         $('.addPurchaseForm').modal('hide');

//     })
// }

// function deletePurchaseForm() {
//     var data = $('#editPurchaseForm').serializeArray();
//     var obj = {};
//     data.forEach((element) => {
//         obj[element.name] = element.value
//     })
//     obj['type'] = 'purchase';
//     db.remove(obj).then(() => {
//         console.log("editPurchaseForm ", obj);
//         purchaseInit()
//         $('.editPurchaseForm').modal('hide');
//     })
// }

// function editPurchaseFormSubmit() {
//     var data = $('#editPurchaseForm').serializeArray();
//     var obj = {};
//     data.forEach((element) => {
//         obj[element.name] = element.value
//     })
//     obj['type'] = 'purchase';
//     // obj['_id'] = 'purchase';
//     // obj['_rev'] = 'purchase';
//     db.post(obj).then(() => {
//         console.log("editPurchaseForm ", obj);
//         // document.getElementById("editPurchaseForm").reset();
//         purchaseInit()
//         $('.editPurchaseForm').modal('hide');
//     })
// }
//================================================================================
// var purchaseOBJ = {
//     addnewForm: {
//         general: [{
//             fileNumber: "2341234",
//             moza: "moza",
//             offeredPrice: "1223222",
//             area: {
//                 kanal: "33",
//                 marla: "33",
//                 sqFeet: "33",
//             },
//         }],
//         offeredBy: "jamal",
//         landOwnerName: "faisal",
//         bianaAmount: "234231",
//         bianaExpence: [{
//             bianaExpenceType: "biana expence",
//             bianaExpenceAmount: "2342",
//         }],
//         bianaRemarks: "biana phase 4",
//         dueDate: "3/3/2019",
//         fullPayment: "12341234",
//         fullPaymentRemarks: "dha phase 4 full payment remarks",
//         tokanMoney: "2312",
//         tokanRemarks: "dha phase 4",
//         tokenExpenceAmount: "214",
//         tokenExpence: [{
//             tokenType: "confirm",
//             tokenExpenceType: "token expene",
//         }]

//     },
//     purchaseInit: function () {
//         console.log("purchaseInit");
//         db.find({
//             selector: {
//                 type: 'purchase'
//             },
//             fields: ['_id', 'fileNumber', 'area', 'moza', 'offeredBy', 'offeredPrice', 'landOwnerName'],
//         }).then((x) => {
//             dataTablepurchase = x.docs;
//             var htmldata = '';
//             dataTablepurchase.forEach((row, i) => {
//                 var tableColHtml = `<td>${i+1}</td>`;
//                 Object.keys(row).forEach(function (key) {
//                     if (key !== '_id' && key !== '_rev' && key !== 'type') {
//                         tableColHtml = tableColHtml + `<td>${row[key]}</td>`
//                     }
//                 });
//                 tableColHtml = tableColHtml + /*html*/ `
//                 <td>    <span  class="text-primary" onclick="editPurchaseForm('${row._id}')"><ion-icon name="eye"></ion-icon> </span></td>
//             `;
//                 htmldata = htmldata + `<tr id="deleteRow${row._id}">${tableColHtml}<tr>`;


//             })
//             console.log("purchaseInit data", dataTablepurchase);
//             // tableFromArray(dataTablepurchase);
//             $('#purchaseTableData').html(htmldata)
//         })
//     },
//     addnewSubmit: function () {
//         console.log("addnewVar ", this.addnewForm)
//     },
//     resetaddnewForm: function () {
//         console.log("rest this form purchase form")
//     },
//     removerow: function (id) {
//         $(`#${id}`).remove()
//     },
//     addnewgeneral: function () {
//         var id = new Date().valueOf();
//         var t = `
//         <div class="row" id="${id}">
//         <div class="form-group col">
//         <input class="form-control round" disabled  name="fileNumber" placeholder="" value="">
//         </div>
//         <div class="form-group col">
//         <input class="form-control round" disabled  name="moza" placeholder="" value="">
//         </div>
//         <div class="form-group col">
//         <input class="form-control round" disabled  name="offeredPrice" placeholder="" value="">
//         </div>

//         <div class="form-group col">
//         <input class="form-control round" disabled name="area" placeholder="" value="">
//         </div>
//         <div class="form-group col">
//         <input class="form-control round" disabled name="area" placeholder="" value="">
//         </div>
//         <div class="form-group col">
//         <input class="form-control round" disabled  name="area" placeholder="" value="">
//         </div>
//         <div class="form-group col">
//         <button type="button" class="btn btn-danger btn-block round" onclick="removerow(${id})">Remove</button>
//         </div>
//         </div>
//         `;
//         $('#addnewgeneraltable').append(t);
//     },
//     showAddPurchaseForm: function () {
//         $('.addPurchaseForm').modal('show');
//     },
//     addnewExpense: function (appendId, typeId, ammountId) {
//         console.log(appendId, typeId, ammountId)
//         // console.log("addnewTokenExpense()",$('#tokenExpenceType').val(),$('#tokenExpenceAmount').val(),$('#tokenExpenceAmount').val()==="");
//         if ($(typeId).val() !== "" && $(ammountId).val() !== "") {
//             var id = new Date().valueOf();
//             var t = `
//             <div class="row" id="${id}">
//             <div class="form-group col">
//             <input class="form-control round"  disabled value="${$(typeId).val()}">
//             </div>

//             <div class="form-group col">
//             <input class="form-control round" disabled value="${$(ammountId).val()}">
//             </div>

//             <div class="form-group col">
//             <button type="button" class="btn btn-block btn-danger round" onclick="removerow(${id})">Remove</button>
//             </div>

//             </div>
//             `;
//             $(appendId).append(t);
//             $(typeId).val("");
//             $(ammountId).val("");
//         }
//     },
//     showEditPurchaseForm:function(id){
//         db.get(id).then((doc) => {
//             for (var i = 0; i < $('#editPurchaseForm')[0].length; i++) {
//                 if ($('#editPurchaseForm')[0][0].localName === 'input') {
//                     $('#editPurchaseForm')[0][i].value = doc[$('#editPurchaseForm')[0][i].name]
//                     // console.log("editPurchaseForm",$('#editPurchaseForm')[0][i].value,doc[$('#editPurchaseForm')[0][i].name]);
//                 }
//             }

//             $('.editPurchaseForm').modal('show');
//         })
//     },
// }