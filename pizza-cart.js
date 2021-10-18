module.exports = function cart() {
    var grandtotal =0;
    var smtotal=0;
    var mdtotal =0;
    var lgtotal = 0;
    var sqty = 0;
    var mqty = 0;
    var lqty = 0;
    var toogle = 'hide';
    let orderlist = [];
    // var dis = '';


    function hide() {
        toogle = 'hide'

    }

    function hiderem() {
        toogle = ''

    }
    function hideremv() {
        toogle = ''

    }
    function hidev() {
        
        return toogle

    }

    // function disabling() {
        
    //     dis = 'disabled'

    // }
    // function disablingv() {
        
    //     return dis

    // }


    function buymedium(a) {
        // mediump =0;
        // return mediump; 
        
    }
    function buylarge(a) {
        // largep =00;
        // return largep;
        
    }


    function stotal() {
        return smtotal
        
    }

    function mtotal() {
        return mdtotal
        
    }

    function ltotal() {
        return lgtotal
        
    }

    function gtotal() {
        return grandtotal
        
    }

    function smallqty() {
        return sqty
        
    }
    function mediumqty() {
        return mqty
        
    }
    function largeqty() {
        return lqty
        
    }
    

    
    function addsmall() {

            smtotal +=49;
            grandtotal +=49;
            sqty++;
        
        
        
    }


    function addmedium() {
        mdtotal +=89;
        grandtotal+=89;
        mqty++;
        
    }

    function addlarger() {
        lgtotal+=129;
        grandtotal+=129;
        lqty++;
        
    }
    function minussmall() {
        if (smtotal>0 || sqty>0) {
            smtotal-=49;
        grandtotal-=49;
        sqty--;
        }
        
        
    }
    function minusmedium() {
        if (mdtotal>0 || mqty>0) {
            mdtotal -=89;
        grandtotal-=89;
        mqty--;
        }
        
        
    }
    function minuslarger() {
        if (lgtotal>0 || lqty>0) {
            lgtotal-=129;
            grandtotal-=129;
            lqty--;
        }
 
        
    }
    function clearcart() {
        grandtotal =0;
        smtotal=0;
        mdtotal =0;
        lgtotal = 0;
        sqty = 0;
        mqty = 0;
        lqty = 0;
        
    }
    function orderregister() {
        orderlist.push({
            id: 1,
            amount: gtotal(),
            status: 'pay'
        })
        
    }

    function orderlisting() {
        return orderlist
    }


 
    return{
        hide,
        hidev,
        hiderem,
        hideremv,
        // disabling,
        // disablingv,
        buymedium,
        buylarge,
        addsmall,
        addmedium,
        addlarger,
        minussmall,
        minusmedium,
        minuslarger,
        stotal,
        mtotal,
        ltotal,
        gtotal,
        smallqty,
        mediumqty,
        largeqty,
        clearcart,
        orderregister,
        orderlisting
    }
}