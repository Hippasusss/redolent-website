var mailInput = document.getElementById('mailer');
var liveDates = document.getElementById('bandsintown');
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
