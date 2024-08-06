const signUp = async () => {
    // CHECK IF EMAIL IS POPULATED.
    const textbox = document.getElementById('signup-textbox');
    const validator = document.getElementById('signup-validator');
    const email = textbox.value;
    if (!email) {
        validator.classList.replace('valid', 'invalid');
        validator.innerText = 'Enter an email';
        textbox.classList.replace('valid', 'invalid');
        return;
    }

    // CHECK IF EMAIL IS VALID.
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
        validator.classList.replace('valid', 'invalid');
        validator.innerText = 'Enter a valid email';
        textbox.classList.replace('valid', 'invalid');
        return;
    }

    // EMAIL IS VALID.
    validator.classList.replace('invalid', 'valid');
    validator.innerText = '';
    textbox.classList.replace('invalid', 'valid');

    // SEND EMAIL.
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            service_id: 'service_u9q60wt',
            template_id: 'template_pqf0y0g',
            user_id: 'HSVMi0S9TyJYriBKw',
            template_params: { 'subscriber': `${email}` }
        })
    });
    if (!response.ok) {
        console.log(response);
    }

    // INDICATE EMAIL IS SENT.
    const buttonElement = document.getElementById("signup-button");
    buttonElement.innerText = 'Thanks!';
    buttonElement.classList.add('check');
};
