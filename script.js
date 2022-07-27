var textfield1 = document.getElementById("text-field-1");
var textfield2 = document.getElementById("text-field-2");
var textfield3 = document.getElementById("text-field-3");
var textfield4 = document.getElementById("text-field-4");

function convert() {
    //var a = Number(textfield1.value).toString(Number(textfield3.value))
    var a = parseInt(Number(textfield1.value), Number(textfield2.value)).toString(Number(textfield3.value))
    textfield4.value = a;
}