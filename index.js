var mailInput = document.getElementById('mailer');
var liveDates = document.getElementById('bandsintown');
const hidden = 'hidden'
const visible= 'visible'
function onLiveClick()
{
    if(mailInput.style.visibility = visible)
    {
        mailInput.style.visibility = hidden;
    }
    liveDates.style.visibility = visible;

}

function onMailClick()
{
    if(liveDates.style.visibility = visible)
    {
        liveDates.style.visibility = hidden;
    }
    mailInput.style.visibility = visible;
}
