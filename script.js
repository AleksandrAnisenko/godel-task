function submitForm() {
	var form = document.getElementById('form'),
		div = document.createElement("div");
	div.className = "info";
	var list = document.getElementsByClassName('in');
	console.log(list[1].value);
	div.innerHTML = list[0].value;
	form.appendChild(div);
	div.innerHTML = list[1].value;
	form.appendChild(div);



}

