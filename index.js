const signUp =  document.querySelector(".signup");
const termCond = document.querySelector("#accept");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const pwd_format = document.querySelector(".pwd-format")

//this is the pattern which the password must take
const passwordPattern = /^[a-zA-Z0-9]{8,15}$/

//when the password place is clicked this happens
password.addEventListener("focusin", () => {
    pwd_format.style.display = "block";

    //checking to see if is of the right pattern
password.addEventListener("keyup", () => {
    if(passwordPattern.test(password.value)){
        password.style.borderColor = "green"
        //if the pattern is right, show green

    pwd_format.style.color = "green"
    } else{
        password.style.borderColor = "red"

        password.style.color = "red"
    }
})

});

password.addEventListener("focusout", () => {
    pwd_format.style.display = "none";
});

confirmPassword.addEventListener("focusin", () => {
    pwd_format.style.display = "block";

    confirmPassword.addEventListener("keyup", () => {
        if (passwordPattern.test(confirmPassword.value) && 
        password.value === confirmPassword.value) {
            confirmPassword.style.borderColor = "green"
            // if pattern is correct color in green
        pwd_format.style.color = "green"                 
        }else {
            confirmPassword.style.borderColor = "red"

            pwd_format.style.color = "red"
        }
    })
})

confirmPassword.addEventListener("focusout", () => {
    pwd_format.style.display = "none";
})

termCond.addEventListener("change", () => {
    if (termCond.checked === true){
        signUp.disabled = false;
    } else if (termCond.checked === false) {
        signUp.disabled = true;
    }
})
