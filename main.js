const share = document.getElementById('share' );
const close = document.getElementById('sharePoppup"');

let poppUp = document.getElementById('socLinks') ; 



share.onclick = function () {
    if(poppUp.className != 'active'){
        poppUp.className = 'active';

    }else if (poppUp.className = 'active') {
        poppUp.className = 'links'
    }
}

sharePoppup.onclick = function () {
    
    poppUp.className = 'links';
}



