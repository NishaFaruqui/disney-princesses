function finalValid() { //this function includes all the other functions that will validate each section of the form
checkfname();
checklname();
validNumber();
}

function checkfname() { //function to validate Name
    var fname, text;

    // Get the value of the input field with id="fullname"
    fname = document.getElementById("fname").value;

    if (fname == "" || parseInt(fname)) { //rules out input that is empty or is a number instead of a letter
      text = "Invalid input!";
    } else {
        text = "Input OK";
    }
    document.getElementById("check1").innerHTML = text;
}

function checklname() { //function to validate Name
    var lname, text;

    lname = document.getElementById("lname").value;

    if (lname == "" || parseInt(lname)) { //rules out input that is empty or is a number instead of a letter
      text = "Invalid input!";
    } else {
        text = "Input OK";
    }
    document.getElementById("check2").innerHTML = text;
}


function validNumber() { //function to validate phone number
    var phone, text;

    phone = document.getElementById("phone").value;

/*these if statements will respectively rule out any input that is not a number, input that does not contain 10 digits, and input that is empty*/
    if (isNaN(phone) || phone.length!= 10 || phone == "") {
        text = "Invalid input!";
    } else {
        text = "Input OK";
    }
    document.getElementById("check3").innerHTML = text;

    if (text == "Input OK") {
      alert("Thank you! A confirmation text will be sent to " + document.validation.phone.value);
    }
}
