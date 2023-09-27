var mailInputContainer = document.getElementById('mailer');
var bandsInTownContainer = document.getElementById('bandsintown');
var mailThanks= document.getElementById('mailthx');
const testKeyMailChimp = "01d9493d7da34e2f865e8c1354472e73-us17"
const dcMailChimp = "us17"
const audienceID = "44d77fc558"
const hidden = 'hidden'
const visible= 'visible'

var emailForm = document.getElementById("emailform");

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
