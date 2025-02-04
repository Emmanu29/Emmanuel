
document.getElementById('send_message').addEventListener('click', async function (e) {
    e.preventDefault();
    
    const form = document.getElementById('contact_form');
    const emptyNotice = document.querySelector('.empty_notice');
    const returnMessage = document.querySelector('.returnmessage');
    
    // Reset messages
    const resetMessages = () => {
        emptyNotice.style.display = 'none';
        emptyNotice.innerHTML = '<span>Please Fill Required Fields</span>';
        returnMessage.style.display = 'none';
    };

    // Validate form fields
    const formFields = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    resetMessages();

    // Check for empty fields
    const emptyFields = Object.entries(formFields).filter(([_, value]) => !value);
    if (emptyFields.length > 0) {
        emptyNotice.style.display = 'block';
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formFields.email)) {
        emptyNotice.innerHTML = '<span>Please enter a valid email address</span>';
        emptyNotice.style.display = 'block';
        return;
    }

    try {
        returnMessage.innerHTML = '<span>Submitting your message...</span>';
        returnMessage.style.display = 'block';
        
        // Submit the form
        form.submit();
    } catch (error) {
        emptyNotice.innerHTML = '<span>An error occurred. Please try again.</span>';
        emptyNotice.style.display = 'block';
    }
});
