$("#type-1").click(function(){
   $("#price").attr("style", "display: block").text("989.000 VND")
});

$("#type-2").click(function(){
    $("#price").attr("style", "display: block").text("1.995.000 VND")
});

function isVietnamesePhoneNumber(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

function isValidateEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

$("#submit-btn").click(function (){
    if (!$("#name-field").val().trim() || !$("#phone-number-field").val().trim() || !$("#email-field").val().trim()) {
        $("#error-label").addClass("error-notification").text("* Vui lòng điền đầy đủ các trường")
        return
    }
    if ($("input[name='package-type']:checked").val() === undefined) {
        $("#error-label").addClass("error-notification").text("* Vui lòng chọn gói học")
        return;
    }
    // When the user clicks the button, open the modal
    modal.style.display = "block";
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

var div = document.getElementById("ok-btn");


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    location.reload();
}

div.onclick = function () {
    modal.style.display = "none";
    location.reload();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        location.reload();
    }
}