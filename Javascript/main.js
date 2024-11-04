document.getElementById('loginSubmit').onclick = function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const alertMessage = document.getElementById('alertMessage');

    if (email === 'sara@gmail.com' && password === '1234') {
        alertMessage.className = 'alert alert-success';
        alertMessage.innerText = 'Login successful!';
    } else {
        alertMessage.className = 'alert alert-danger';
        alertMessage.innerText = 'Invalid email or password!';
    }
    alertMessage.style.display = 'block';
};
/////////////////////////////////////////////////////////////////
function copyText() {
    navigator.clipboard.writeText("النص المراد نسخه");
    document.getElementById("copied-text").style.display = "inline";
    document.getElementById("overlay").style.display = "flex";
    setTimeout(() => {
        document.getElementById("copied-text").style.display = "none";
    }, 2000);
}

function closeAlert() {
    document.getElementById("overlay").style.display = "none";
}


                                             













