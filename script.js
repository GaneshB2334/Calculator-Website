function val(value) {
    document.querySelector(".input").innerHTML = document.querySelector(".input").innerHTML + value;
}
function del() {
    document.querySelector(".input").innerHTML = document.querySelector(".input").innerHTML.slice(0, document.querySelector(".input").innerHTML.length - 1);
}
function delall() {
    document.querySelector(".input").innerHTML = document.querySelector(".input").innerHTML.slice(0, 0);
}
function solve() {
    let eq = document.querySelector(".input").innerHTML;
    if (!eq.endsWith("ERROR")) {
        try {
            eval(eq);
            document.querySelector(".input").innerHTML = eval(eq);
        }
        catch {
            document.querySelector(".input").innerHTML = "ERROR";
        }
    }
} 
document.body.addEventListener("keydown", function (event) {
    const pressedKey = event.key;

    if (/^\d$/.test(pressedKey)) {
        val(pressedKey);
    }

    if (["+", "-", "*", "/"].includes(pressedKey)) {
        val(pressedKey);
    }

    if (pressedKey === ".") {
        val(pressedKey);
    }

    if (event.key === "Enter") {
        solve();
    }

    if (event.key == "Backspace") {
        del();
    }

});