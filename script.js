function submitForm() {
	var form = document.getElementById('form'),
		div = document.createElement("div");
	div.className = "info";
	form.innerHTML = "";
	div.innerHTML = "......";
	form.appendChild(div);
}

