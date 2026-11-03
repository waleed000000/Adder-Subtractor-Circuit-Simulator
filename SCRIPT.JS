
function convert() {

    let n = Number(document.getElementById("num").value);

    if (isNaN(n)) {
        document.getElementById("result").innerText =
            "Please type a number";
        return;
    }

    document.getElementById("result").innerText =
        "Binary: " + n.toString(2);
}
