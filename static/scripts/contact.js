const sendContactMessage = async () => {
    // CHECK IF NAME IS POPULATED.
    const nameTextbox = document.getElementById('contact-name-textbox');
    const name = nameTextbox.value.trim();
    if (!name) {
        nameTextbox.classList.replace('valid', 'invalid');
        return;
    }

    // NAME IS VALID.
    nameTextbox.classList.replace('invalid', 'valid');

    // CHECK IF EMAIL IS POPULATED.
    const emailTextbox = document.getElementById('contact-email-textbox');
    const email = emailTextbox.value.trim();
    if (!email) {
        emailTextbox.classList.replace('valid', 'invalid');
        return;
    }

    // CHECK IF EMAIL IS VALID.
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
        emailTextbox.classList.replace('valid', 'invalid');
        return;
    }

    // EMAIL IS VALID.
    emailTextbox.classList.replace('invalid', 'valid');

    // CHECK IF THE MESSAGE IS POPULATED.
    const messageTextarea = document.getElementById('contact-message-textarea');
    const message = messageTextarea.value;
    if (!message) {
        messageTextarea.classList.replace('valid', 'invalid');
        return;
    }

    // MESSAGE IS VALID.
    messageTextarea.classList.replace('invalid', 'valid');

    // FORMAT VALUES.
    const formattedName = escapeHtml(name);
    const formattedEmail = escapeHtml(email);
    const formattedMessage = escapeHtml(message);

    // INDICATE EMAIL IS SENT.
    const buttonElement = document.getElementById("contact-button");
    buttonElement.innerText = 'THANKS!';
    buttonElement.classList.add('checked');
    buttonElement.onclick = '';

    // SEND EMAIL.
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            service_id: 'service_u9q60wt',
            template_id: 'template_p34glfh',
            user_id: 'HSVMi0S9TyJYriBKw',
            template_params: { 
                'name': `${formattedName}`, 
                'email': `${formattedEmail}`, 
                'message': `${formattedMessage}` 
            }
        })
    });
    if (!response.ok) {
        console.log(response);
    }
};
