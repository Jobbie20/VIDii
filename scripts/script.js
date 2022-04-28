// JavaScript Document
console.log("Howdy!");
console.log("test");


// ***********************
// level 1 animation
// ***********************

// fire
var lever = document.getElementsByClassName('button-lever');
var vuur = document.getElementsByClassName('level-1-vuur');


for (var i = 0; i < vuur.length; i++) {
    vuur[i].style.opacity = 1;
}

function level1_lever_click(){ 

    for (var i = 0; i < vuur.length; i++) {


        if(vuur[i].style.opacity == 1 ) { 
            console.log(i + "active");
            vuur[i].style.opacity = 0; 
        }
        else { 
            // alert(3);
            console.log(i + "inactive");
            vuur[i].style.opacity = 1;
        }
    }
}

// knop welke link is dit?
function level1_button2(){ 
    var text = document.querySelector('.home-uitleg-1');
    
    text.classList.toggle("aan");
}

// knop welke item is dit?
function level1_button3(){ 
    var text = document.querySelector('.home-uitleg-2');
    
    text.classList.toggle("aan");
}

//link lopen

function level1_button(){ 
    var link = document.querySelector('.level-1-button');
   
    link.classList.add("lopen");
}




// ***********************
// level 2 animation
// ***********************

//link lopen
function level2_button(){ 
    var link2 = document.querySelector('.level-2-button');
   
    link2.classList.add("lopen");

}

//blok naar beneden
function level2_button2(){ 
    var button2 = document.querySelector('.level-2-button2');
    var link2 = document.querySelector('.level-2-button');
   
    button2.classList.add("naar-beneden");
    link2.classList.add("aan");
}

// knop welke link is dit?
function level2_button3(){ 
    var text = document.querySelector('.level-2-uitleg-1');
    
    text.classList.toggle("aan");
}

// knop welk item is dit?
function level2_button4(){ 
    var text = document.querySelector('.level-2-uitleg-2');
    
    text.classList.toggle("aan");
}




// ***********************
// level 3 animation
// ***********************

// knop kist animatie
function level3_chest(){ 
    var button3 = document.querySelector('.level-3-button');
    var kistopen = document.querySelector('.level-3-kist-open');
    var bow = document.querySelector('.level-3-bow');
    var link3 = document.querySelector('.level-3-button2');
  
    button3.classList.add("fade-out");
    kistopen.classList.add("fade-in");
    bow.classList.add("eruit");
    link3.classList.add("aan");
}

// knop welke link is dit?
function level3_link(){ 
    var link3 = document.querySelector('.level-3-button2');
  
    link3.classList.add("lopen");
}

function level3_button(){ 
    var text = document.querySelector('.level-3-uitleg-1');
    
    text.classList.toggle("aan");
}

function level3_button2(){ 
    var text = document.querySelector('.level-3-uitleg-2');
    
    text.classList.toggle("aan");
}



// ***********************
// level 4 animation
// ***********************
function level4_bow(){ 
    var arrow = document.querySelector('.level-4-arrow');
    var enemy = document.querySelector('.level-4-enemy');
    var link4 = document.querySelector('.level-4-button2');

    arrow.classList.add("fly");
    enemy.classList.add("defeated");
    link4.classList.add("aan");
}

function level4_link(){ 
    var link4 = document.querySelector('.level-4-button2');

    link4.classList.add("lopen");
}

function level4_button(){ 
    var text = document.querySelector('.level-4-uitleg-1');
    
    text.classList.toggle("aan");
}

function level4_button2(){ 
    var text = document.querySelector('.level-4-uitleg-2');
    
    text.classList.toggle("aan");
}



// ***********************
// level 5 animation
// ***********************
function level5_chest(){ 
    var button5 = document.querySelector('.level-5-button');
    console.log(button5);
    var kistopen5 = document.querySelector('.level-5-kist-open');
    var bow5 = document.querySelector('.level-5-button2');
  
    button5.classList.add("fade-out");
    kistopen5.classList.add("fade-in");
    bow5.classList.add("eruit");
}

function level5_key(){ 
    var button52 = document.querySelector('.level-5-button2');
    console.log(button52);
    var gatedicht = document.querySelector('.gate-licht-up-dicht-1');
    var gateopen = document.querySelector('.gate-licht-up-12');
    var link5 = document.querySelector('.level-5-button3');
  
    button52.classList.add("fade-out");
    gatedicht.classList.add("fade-out");
    gateopen.classList.add("fade-in");
    link5.classList.add("aan");
}

function level5_link(){ 
    var link5 = document.querySelector('.level-5-button3');

    link5.classList.add("lopen");
}

function level5_button(){ 
    var text = document.querySelector('.level-5-uitleg-1');
    
    text.classList.toggle("aan");
}

function level5_button2(){ 
    var text = document.querySelector('.level-5-uitleg-2');
    
    text.classList.toggle("aan");
}



// ***********************
// level 6 animation
// ***********************
function level6_bomb(){ 
    var button6 = document.querySelector('.level-6-button');
    console.log(button6);
    var explodingbomb = document.querySelector('.level-6-explodingbomb');
    var bombablewall = document.querySelector('.level-6-bombable-wall-2');
  
    button6.classList.add("fade-out");
    explodingbomb.classList.add("boem");
    bombablewall.classList.add("kapot");
}

function level6_bomb2(){ 
    var button62 = document.querySelector('.level-6-button2');
    console.log(button62);
    var explodingbomb2 = document.querySelector('.level-6-explodingbomb-2');
    var bombablewall2 = document.querySelector('.level-6-bombable-wall-4');
    var link6 = document.querySelector('.level-6-button3');
  
    button62.classList.add("fade-out");
    explodingbomb2.classList.add("boem");
    bombablewall2.classList.add("kapot");
    link6.classList.add("aan");
}

function level6_link(){ 
    var link6 = document.querySelector('.level-6-button3');

    link6.classList.add("lopen");
}

function level6_button(){ 
    var text = document.querySelector('.level-6-uitleg-1');
    
    text.classList.toggle("aan");
}

function level6_button2(){ 
    var text = document.querySelector('.level-6-uitleg-2');
    
    text.classList.toggle("aan");
}



// ***********************
// level 7 animation
// ***********************
function level7_chest(){ 
    var button7 = document.querySelector('.level-7-button');
    console.log(button7);
    var kistopen7 = document.querySelector('.level-7-kist-open');
    var bow7 = document.querySelector('.level-7-waterrod');
    var link7 = document.querySelector('.level-7-button2');
  
    button7.classList.add("fade-out");
    kistopen7.classList.add("fade-in");
    bow7.classList.add("eruit");
    link7.classList.add("aan");
}

function level7_link(){ 
    var link7 = document.querySelector('.level-7-button2');

    link7.classList.add("lopen");
}

function level7_button(){ 
    var text = document.querySelector('.level-7-uitleg-1');
    
    text.classList.toggle("aan");
}

function level7_button2(){ 
    var text = document.querySelector('.level-7-uitleg-2');
    
    text.classList.toggle("aan");
}



// ***********************
// level 8 animation
// ***********************
function level8_waterrod(){ 
    var projectile = document.querySelector('.level-8-projectile');
    var enemy2 = document.querySelector('.level-8-enemy');
    var link8 = document.querySelector('.level-8-button2');

    projectile.classList.add("fly");
    enemy2.classList.add("defeated");
    link8.classList.add("aan");
}

function level8_link(){ 
    var link8 = document.querySelector('.level-8-button2');

    link8.classList.add("lopen");
}

function level8_button(){ 
    var text = document.querySelector('.level-8-uitleg-1');
    
    text.classList.toggle("aan");
}

function level8_button2(){ 
    var text = document.querySelector('.level-8-uitleg-2');
    
    text.classList.toggle("aan");
}



// ***********************
// level 9 animation
// ***********************
function level9_flyingboots(){ 
    var button9 = document.querySelector('.level-9-button');
    var link9 = document.querySelector('.level-9-link');

    link9.classList.add("jump");
    button9.classList.add("fade-out");
}

function level9_button(){ 
    var text = document.querySelector('.level-9-uitleg-1');
    
    text.classList.toggle("aan");
}

function level9_button2(){ 
    var text = document.querySelector('.level-9-uitleg-2');
    
    text.classList.toggle("aan");
}

function level10_link(){ 
    var link10 = document.querySelector('.level-10-button');

    link10.classList.add("lopen");
}



// ***********************
// level 10 animation
// ***********************
function level10_button(){ 
    var text = document.querySelector('.level-10-uitleg-1');
    
    text.classList.toggle("aan");
}



// ***********************
// level 11 animation
// ***********************
function level11_bow(){ 
    var arrow = document.querySelector('.level-11-arrow');
    var bow = document.querySelector('.level-11-button');
    var waterrod = document.querySelector('.level-11-button2');
    var heart1 = document.querySelector('.level-11-heart-3');
    var heart2 = document.querySelector('.level-11-heart-4');

    arrow.classList.add("fly");
    bow.classList.add("fade-out");
    waterrod.classList.add("aan");
    heart1.classList.add("dood");
    heart2.classList.add("dood");
}

function level11_waterrod(){ 
    var projectile = document.querySelector('.level-11-projectile');
    var boss = document.querySelector('.level-11-boss');
    var link11 = document.querySelector('.level-11-link');
    var waterrod = document.querySelector('.level-11-button2');
    var heart3 = document.querySelector('.level-11-heart-2');
    var heart4 = document.querySelector('.level-11-heart-1');
    var heart5 = document.querySelector('.level-11-heart-5');

    projectile.classList.add("fly");
    boss.classList.add("defeated");
    link11.classList.add("lopen");
    waterrod.classList.add("fade-out");
    heart3.classList.add("dood");
    heart4.classList.add("dood");
    heart5.classList.add("dood");
}

function level11_button(){ 
    var text = document.querySelector('.level-11-uitleg-1');
    
    text.classList.toggle("aan");
}

function level11_button2(){ 
    var text = document.querySelector('.level-11-uitleg-2');
    
    text.classList.toggle("aan");
}
