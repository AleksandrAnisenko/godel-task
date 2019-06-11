function submitForm() {
	var form = document.getElementById('form'),
		div = document.createElement("div");
	div.className = "info";
	div.innerHTML = document.getElementById('name').value;
	form.appendChild(div);
	div.innerHTML = document.getElementById('surname').value;
	form.appendChild(div);
	div.innerHTML = document.getElementById('secondname').value;
	form.appendChild(div);


}

