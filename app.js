const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const result = document.querySelector(".count");

let counter = 0;

btn3.addEventListener("click", function () {
	counter++;
	result.textContent = counter;
	compare();
});
btn1.addEventListener("click", function () {
	counter--;
	result.textContent = counter;
	compare();
});
btn2.addEventListener("click", function () {
	counter = 0;
	result.textContent = counter;
	compare();
});

function compare() {
	if (result.textContent < 0) {
		result.style.color = "red";
	} else if (result.textContent > 0) {
		result.style.color = "green";
	} else {
		result.style.color = "";
	}
}
