var lever = document.getElementsByClassName('button-lever');
var vuur = document.getElementsByClassName('level-1-vuur');

// Set (initialize) all vuur opacity to 1


function level1_lever_click(){ 
    // For all "level-1-vuur" classes
    for (var i = 0; i < vuur.length; i++) {

        // console.log(i + "=" + vuur[i].style.opacity);

        // if(vuur[i].style.opacity == 1 ) { 
            // console.log(i + "active");
            vuur[i].classList.toggle("onzichtbaar"); 
        // }
        // else { 
        //     // alert(3);
        //     console.log(i + "inactive");
        //     vuur[i].classList.remove("onzichtbaar"); 
        // }
    }
}









function level2_button(){ 
    var button2 = document.getElementsByClassName('level-2-button');
    button2.classList.add("naar-boven");
}


