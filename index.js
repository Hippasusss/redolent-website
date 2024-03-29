var mailInputContainer = document.getElementById('mc_embed_shell');
var bandsInTownContainer = document.getElementById('bandsintown');
var mailThanks= document.getElementById('mailthx');
var currentlyVisableContainer = mailInputContainer;
const hidden = 'hidden'
const visible= 'visible'
const fadeTime = 10 

document.addEventListener('DOMContentLoaded', function() {
    bandsInTownContainer.style.display ='none';
}, false);

function onLiveClick()
{
    activateContainer(bandsInTownContainer);
}

function onMailClick()
{
    activateContainer(mailInputContainer);
}

function activateContainer(container)
{
    if(currentlyVisableContainer != container)
    {
        fade(currentlyVisableContainer);
        unfade(container);
        currentlyVisableContainer = container;
    }
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, fadeTime);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, fadeTime);
}
