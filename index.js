var mailInputContainer = document.getElementById('mailer');
var bandsInTownContainer = document.getElementById('bandsintown');
var mailThanks= document.getElementById('mailthx');
const testKeyMailChimp = "a5a3ba0aa4d460f1488d3a7b487ef675-us17"
const dcMailChimp = "us17"
const audienceID = "44d77fc558"
const hidden = 'hidden'
const visible= 'visible'

var emailForm = document.getElementById("emailform");

async function addEmailToMailChimpDB(email) 
{

    const data = 
        {
            email_address: email,
            status: 'subscribed', 
        };

    try 
    {
        const response = await fetch
        (
            `https://${dcMailChimp}.api.mailchimp.com/3.0/lists/${audienceID}/members`,
            {
                method: 'POST',
                headers: 
                {
                    'Authorization': `Basic ${btoa(`apikey:${testKeyMailChimp}`)}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );

        if (response.ok) 
        {
            console.log('Email added to MailChimp');
        } 
        else 
        {
            console.error('Error adding email to MailChimp:', response.statusText);
        }
    } 
    catch (error) 
    {
        console.error('Error adding email to MailChimp:', error);
    }
}



emailForm.addEventListener("submit", (e) => 
{
    e.preventDefault();
    mailThanks.style.visibility = visible;
    let email = document.getElementById("mail");
    console.log(email.value);
    addEmailToMailChimpDB(email.value)
    email.value = "";

});



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
