let fname = document.querySelector(".fname");
let mname = document.querySelector(".mname");
let lname = document.querySelector(".lname");
let male = document.querySelector(".male");
let female = document.querySelector(".female");
let date = document.querySelector(".date");
let email = document.querySelector(".email");
let mobile = document.querySelector(".mobile");
let country = document.querySelector(".country");
let address = document.querySelector(".address");
let city = document.querySelector(".city");
let state = document.querySelector(".state");
let pin = document.querySelector(".pincode");
let agree_check = document.querySelector(".check");
let registerBtn = document.querySelector("#register");

clearValues();

registerBtn.addEventListener('click', function () {
    // window.location.href = "main.html";
    if (!ifAgree()) {
        insertToLocalStorage();
    } else {
        alert("Please agree to the Terms & Conditions");
    }

});

function insertToLocalStorage() {
    localStorage.setItem("fname", fname.value);
    localStorage.setItem("mname", mname.value);
    localStorage.setItem("lname", lname.value);
    localStorage.setItem("date", date.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("mobile", mobile.value);
    localStorage.setItem("country", country.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("state", state.value);
    localStorage.setItem("pincode", pin.value);

    if (male.checked) {
        localStorage.setItem("gender", 'male');
        console.log(localStorage.getItem("gender"));
    }
    if (female.checked) {
        localStorage.setItem("gender", 'female');
        console.log(localStorage.getItem("gender"));

    }
}

function clearValues() {
    fname.value = "";
    mname.value = "";
    lname.value = "";
    date.value = "";
    email.value = "";
    mobile.value = "";
    country.value = "";
    address.value = "";
    city.value = "";
    state.value = "";
    pin.value = "";
    male.checked = false;
    female.checked = false;
}


function ifAgree() {
    if (agree_check.checked) {
        return true;
    } else {
        return false;
    }
}

// VALIDATION

