const signUp = async () => {
    // CHECK IF EMAIL IS POPULATED.
    const validator = document.getElementById('signup-validator');
    const email = document.getElementById('signup-textbox').value.trim();
    if (!email) {
        validator.classList.replace('valid', 'invalid');
        validator.innerText = 'Enter an email';
        return;
    }

    // CHECK IF EMAIL IS VALID.
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
        validator.classList.replace('valid', 'invalid');
        validator.innerText = 'Enter a valid email';
        return;
    }

    // EMAIL IS VALID.
    validator.classList.replace('invalid', 'valid');
    validator.innerText = '';

    // FORMAT EMAIL.
    const formattedEmail = escapeHtml(email);

    // INDICATE EMAIL IS SENT.
    const buttonElement = document.getElementById("signup-button");
    buttonElement.innerText = 'Thanks!';
    buttonElement.classList.add('check');

    // SEND EMAIL.
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            service_id: 'service_u9q60wt',
            template_id: 'template_pqf0y0g',
            user_id: 'HSVMi0S9TyJYriBKw',
            template_params: { 'subscriber': `${formattedEmail}` }
        })
    });
    if (!response.ok) {
        console.log(response);
    }
};
