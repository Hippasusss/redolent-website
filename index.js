var mailInputContainer = document.getElementById('mc_embed_shell');
var bandsInTownContainer = document.getElementById('bandsintown');
var mailThanks= document.getElementById('mailthx');
const hidden = 'hidden'
const visible= 'visible'

function onLiveClick()
{
    if(mailInputContainer.style.visibility = visible)
    {
        mailInputContainer.style.visibility = hidden;
    }
    bandsInTownContainer.style.visibility = visible;
}

function onMailClick()
{
    if(bandsInTownContainer.style.visibility = visible)
    {
        bandsInTownContainer.style.visibility = hidden;
    }
    mailInputContainer.style.visibility = visible;
}
