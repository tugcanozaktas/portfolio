window.onload = function(){
    submitForm();
    clearForm();
}


function submitForm() {
    var alerter = function(e){
        e.preventDefault();
        
        var alerterText = document.getElementById("name-input").value + " " + document.getElementById("email-input").value + " " + document.getElementById("message").value;

        alert(alerterText);
    }


    var submitButton = document.querySelector("#submit-button");

    submitButton.addEventListener("click", alerter, false);
}

function clearForm(){
    var clearFunc = function(e){
        e.preventDefault();

        var nameInput = document.getElementById("name-input");

        var emailInput = document.getElementById("email-input");

        var messageInput = document.getElementById("message");
        
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }
    
    
    
    var clearButton = document.querySelector("#clear-button");
    
    clearButton.addEventListener("click", clearFunc, false);
}