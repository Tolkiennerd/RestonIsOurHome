const signUp = async () => {
    const email = document.getElementById("email-textbox").value;
    if (!email) {
        alert("Enter email");
    }

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
};
