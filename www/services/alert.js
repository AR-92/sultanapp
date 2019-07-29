var alert = {
    note: (timer,color, html) => {
        var c ='';
        if(color==="red"){
            c='#dc3545'
        }
        if(color==="blue"){
            c='#2196F3'
        }
        var alert = `
        <div id="alert" class="card round" style="
        border-top: 1px solid lightgray;
        border-right: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        border-left: 29px solid ${color};
        position: relative;
        margin: auto;
        max-width: 401px;
        ">
        <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    ${html}
                </div>
            </div>

        </div>
        </div>
        `;
        $("body").append(alert);
        setTimeout(() => {
            $('#alert').remove()
        }, timer);
    }
}