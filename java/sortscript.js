/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
// Sorteer functie bij resultaten pagina
var duimpJes = document.getElementById("duimpjes");

var lijst = document.querySelector('main>ul');
var articles = document.querySelectorAll('main>ul>li');


function sortLikes(){
    var i, switching, likes,  shouldSwitch;
     
    switching = true;
    while (switching){
        switching = false;
        likes = lijst.getElementsByClassName("likes");
        for (i = 0; i < (likes.length -1); i++){
            
            shouldSwitch = false;
            
            if (Number(likes[i].innerHTML) > Number(likes[i + 1].innerHTML)){
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            articles[i].parentNode.insertBefore(articles[i + 1], articles[i]);
            switching = true;
        }
    }
}




duimpJes.addEventListener("click", sortLikes);