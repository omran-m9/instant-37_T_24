function ConvertValue() {
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");

    if (dollar.trim() == "") {
        result.innerHTML = "Enter Data";

    } else if (isNaN(dollar)) {
        result.innerHTML = "Enter Number Not Text";

    } else if (Number(dollar) < 0) {
        result.innerHTML = "Enter Positive Number";

    } else if (Number(dollar) == 0) {
        result.innerHTML = "Enter Number Rather Than Zero";

    } else {
        result.innerHTML = Number(dollar) * 50 + " Egyptian Pound";
    }

    return false;
}