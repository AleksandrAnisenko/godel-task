function submitForm() {

	var list1 = document.getElementsByClassName('input-general'),
		list2 = document.getElementsByClassName('input-education'),
		list3 = document.getElementsByClassName('input-contact');

	document.getElementById("profile-title").appendChild(document.createElement('p')).innerHTML = 'Анкета';

	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Имя :';
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Фамилия :';
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Отчество :';
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Датат рождения :';
	document.getElementById("description").appendChild(document.createElement('br'));
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Учреждение образования :';
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Факультет :';
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Специализация :';
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Год завершения :';
	document.getElementById("description").appendChild(document.createElement('br'));
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Телефон :';
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Почта :';
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Скайп :';
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Телеграмм :';
	insertInformation(list1);
	document.getElementById("info").appendChild(document.createElement('br'));
	insertInformation(list2);
	document.getElementById("info").appendChild(document.createElement('br'));
	insertInformation(list3);

	document.getElementById('form').remove();
	document.getElementById('profile-title').style.display = 'block';
	document.getElementsByClassName('profile')[0].style.display = 'block';

}


function insertInformation(input) {

	for (var i = 0; i < input.length; i++) {
		var profile_info = document.createElement('p');
		profile_info.className = 'profile-info';
		input[i].value ?
		document.getElementById("info").appendChild(profile_info).innerHTML = input[i].value :
		document.getElementById("info").appendChild(profile_info).innerHTML = "Нет информации";
	}

}
