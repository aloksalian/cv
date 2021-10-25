function validate() {
    var uname = document.reg_form.uname;
    var inputtxt = document.getElementById("password").value;
    var myemail = document.getElementById("email").value
    var mydropdown = document.getElementById("City").value;
    
    var pname = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,8}$/;
    if(uname.length==0 || myemail.length==0 || inputtxt.length==0 || mydropdown.length==0){
        alert("Please Fill All The Fields")   
    }
    else if (uname.value.length <= 0) {
        alert("Username is required");
        return false;
    }

    else if (uname.value.length >= 20) {
        alert("Max length of username should not excede 20 characters");
        uname.focus();
        return false;
    }
    else if (!inputtxt.match(pname)) {
        alert('Password should be of min 8 length characters, one lowercase letter, one uppercase letter,  one numeric digit and one special character');
    }
    else if(validateemail(myemail)==false){
        alert("Email-id Is Not Valid")  
    }
    else if (mydropdown=="select city"){
        alert("Please select a City!");
        return false;
    }
    else if(!(document.getElementById('language1').checked || document.getElementById('language2').checked || document.getElementById('language3').checked || document.getElementById('language4').checked || document.getElementById('language5').checked )){
        alert('Checkbox not checked');
        return false;
    }
}

function validateemail(email) {
    var x = email;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        return false;
    }
}

