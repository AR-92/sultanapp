var db = new PouchDB('app');

var dataTablepurchase = [];
var purchasePage = /*html*/ `
<img src hidden onerror="purchaseInit()">

<style>
.card {
    border-radius: 25px !important;
    padding: 30px;
}
</style>
<div class="app-notifications">

<hr style="margin: 0px;">
<h4 class="text-center" style="padding-top: 5px;">
    Purchase
</h4>
<hr style="margin: 0px;">

<br>
<br>
<div class="container-fluid">
        <div class="row ">
            <div class="col-md-12">
            <div class="card">
            <div class="table-header">
                <div class="row">
                    <div class="col-md-6 text-left">
                    </div>
                    <div class="col-md-6 text-right">
                        <button type="button" class="btn btn-sm btn-primary round" onclick="addPurchaseTokenForm()">New
                            Token</button>
                            <button type="button" class="btn btn-sm btn-primary round" onclick="addPurchaseBianaForm()">New
                            Biana</button>
                            <button type="button" class="btn btn-sm btn-primary round" onclick="addPurchasePaymentForm()">New
                            Payment </button>
                    </div>
                </div>
            </div>
            <br>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Biana</th>
                    <th scope="col">Price</th>
                    <th scope="col">Name</th>
                    <th scope="col">Area</th>
                    <th scope="col">Moza</th>
                    <th scope="col">Offered By</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>1</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>    <span  class="text-primary" onclick="openPurchaseForm('Add')"><ion-icon name="eye"></ion-icon> </span></td>
                </tr>

                </tbody>
            </table>
        </div>
            </div>
        </div>
</div>
</div>
<div class="modal fade addPurchaseTokenForm text-left"  tabindex="-1" role="dialog"
aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-xl" style="max-width: 1034px;">
    <div class="modal-content" style="border-radius: 27px;">
        <div class="modal-header">
            <h5 class="modal-title" >Token</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span class="text-danger">
                    <ion-icon name="radio-button-on"></ion-icon>
                </span>
            </button>
        </div>
        <div class="modal-body">
        <form id="addPurchaseTokenForm">
        <div class="row">
        <div class="form-group col">
        <label>File Number</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">

        <label>Area (Kanal, marla , sq feet)</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <label>Moza</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        </div>
        <div class="row">
        <div class="form-group col">
        <label>Token Money</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">

        <label>Offered By</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <label>Token Remarks</label>
        <textarea class="form-control round"  name=""></textarea>
        </div>
        </div>
        <div class="row">
        <div class="form-group col">
        <label>Offered Price</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">

        <label>Token Types</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <label>Land Owner Name</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        </div>  
        <div class="row">
        <div class="form-group col">
        <label>Token Expense Type</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">

        <label>Expense </label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <br>
        <button type="button" class="btn btn-sm btn-primary round">Add</button>
        </div>
        </div>  
        </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary round" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-danger round">Delete</button>
            <button type="button" class="btn btn-sm btn-primary round">Add</button>
        </div>
    </div>
</div>
</div>
<div class="modal fade addPurchaseBianaForm text-left"  tabindex="-1" role="dialog"
aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-xl" style="max-width: 1034px;">
    <div class="modal-content" style="border-radius: 27px;">
        <div class="modal-header">
            <h5 class="modal-title" >Biana</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span class="text-danger">
                    <ion-icon name="radio-button-on"></ion-icon>
                </span>
            </button>
        </div>
        <div class="modal-body">
        <form id="addPurchaseBianaForm">
        <div class="row">
        <div class="form-group col">
        <label>File Number</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <label>Biana Amount</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <label>Moza</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        </div>
        <div class="row">
        <div class="form-group col">
        <label>Token Money</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">

        <label>Area (Kanal, marla , sq feet)</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <label>Land Owner Name</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
 
        </div>
        <div class="row">
        <div class="form-group col">
        <label>Offered By</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">

        <label>Offered Price</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <label>Token Remarks</label>
        <textarea class="form-control round"  name=""></textarea>
        </div>
        </div>  
        
        <div class="row">
        <div class="form-group col">
        <label>Deu Date</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <label>Token Remarks</label>
        <textarea class="form-control round"  name=""></textarea>
        </div>
        </div>  
                <div class="row">
        <div class="form-group col">
        <label>Biana Expense Type</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">

        <label>Expense </label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <br>
        <button type="button" class="btn btn-sm btn-primary round">Add</button>
        </div>
        </div> 
        </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary round" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-danger round">Delete</button>
            <button type="button" class="btn btn-sm btn-primary round">Add</button>
        </div>
    </div>
</div>
</div>
<div class="modal fade addPurchasePaymentForm text-left"  tabindex="-1" role="dialog"
aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-xl" style="max-width: 1034px;">
    <div class="modal-content" style="border-radius: 27px;">
        <div class="modal-header">
            <h5 class="modal-title" >Full Payment</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span class="text-danger">
                    <ion-icon name="radio-button-on"></ion-icon>
                </span>
            </button>
        </div>
        <div class="modal-body">
        <form id="addPurchaseBianaForm">
        <div class="row">
        <div class="form-group col">
        <label>File Number</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <label>Biana Amount</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <label>Moza</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        </div>
        <div class="row">
        <div class="form-group col">
        <label>Token Money</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">

        <label>Area (Kanal, marla , sq feet)</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <label>Land Owner Name</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
 
        </div>
        <div class="row">
        <div class="form-group col">
        <label>Offered By</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">

        <label>Offered Price</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
        <div class="form-group col">
        <label>Full Payment</label>
        <input class="form-control round"  name="" placeholder="" value="">
        <small id="" class="form-text text-danger"
        style="display:none"></small>
        </div>
    
        </div>  
        
        <div class="row">
        <div class="form-group col">
        <label>Full Payment Remarks</label>
        <textarea class="form-control round"  name=""></textarea>
        </div>
        </div>
        </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary round" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-danger round">Delete</button>
            <button type="button" class="btn btn-sm btn-primary round">Add</button>
        </div>
    </div>
</div>
</div>
`;

function purchaseInit() {
    console.log("purchaseInit");
    db.find({
        selector: {
            type: 'purchase'
        }
    }).then((x) => {
        dataTablepurchase = x.docs;
        console.log("purchaseInit data", dataTablepurchase);
        // tableFromArray(dataTablepurchase);
    })
}

function addPurchaseTokenForm() {
    $('.addPurchaseTokenForm').modal('show');

}

function addPurchaseBianaForm() {
    $('.addPurchaseBianaForm').modal('show');
}

function addPurchasePaymentForm() {
    $('.addPurchasePaymentForm').modal('show');
}

// function editPurchaseTokenForm() {
//     $('.editPurchaseTokenForm').modal('show');
// }

// function editPurchaseBianaForm() {
//     $('.editPurchaseBianaForm').modal('show');
// }