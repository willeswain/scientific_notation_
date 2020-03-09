let button = document.getElementById('giveNotation');

button.addEventListener("click", () => {
    getNotation();
})

var number = document.createElement("p");

function getNotation(x) {

    var x = document.getElementById("inputNum").value;
    var exponentValue = (x.length - 1);
    var timesTen = " x 10^";

    number.textContent = x + (timesTen) + (exponentValue);

    document.body.appendChild(number);

}
