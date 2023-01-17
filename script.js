function convert() {
    let celsius = document.querySelectorAll("input")[0].value;
    document.querySelectorAll("#result")[0].innerHTML = celsius * 9 / 5 + 32 + " F";
}