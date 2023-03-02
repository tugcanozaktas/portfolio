var submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", alertFunc, false)

var alertFunc = function(){
    var fullName = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;
    var message = document.getElementById("message").value;

    var alert = fullName + email + message ;

    alert(alert);
}

