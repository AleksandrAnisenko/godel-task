var person = {},
	loadFile = function (event) {
		var output = document.getElementById('output');
		output.src = URL.createObjectURL(event.target.files[0]);
		document.getElementsByClassName('example-2')[0].remove();
	};

function submitForm() {

	var list = document.getElementsByClassName('input');

	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Имя :';
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Фамилия :';
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Отчество :';
	document.getElementById("description").appendChild(document.createElement('p')).innerHTML = 'Датата рождения :';
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

	insertInformation(list);
    
	person.name = list[0].value;
	person.surname = list[1].value;
	person.patronymic = list[2].value;
	person.dateOfBirth = list[3].value;
	person.educationalInstitution = list[4].value;
	person.faculty = list[5].value;
	person.specialization = list[6].value;
	person.yearOfCompletion = list[7].value;
	person.phoneNumber = list[8].value;
	person.email = list[9].value;
	person.skype = list[10].value;
	person.telegram = list[11].value;

	document.getElementById('form').remove();
	document.getElementById('profile-title').remove();
	document.getElementsByClassName('profile')[0].style.display = 'block';
	document.getElementById('output').style.margin = '20px 0';
    document.getElementsByClassName('buttons-container')[0].style.display = 'block';
    document.getElementsByClassName('example-2')[0].remove();
   
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(person));

    var dlAnchorElem = document.getElementById('download-button');

    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "scene.json");
    
}


function insertInformation(input) {

	for (var i = 0; i < input.length; i++) {
		var profile_info = document.createElement('p');
		profile_info.className = 'profile-info';
		if(i === 4 || i === 8){
			document.getElementById("info").appendChild(document.createElement('br'));
		}
		input[i].value ?
			document.getElementById("info").appendChild(profile_info).innerHTML = input[i].value :
			document.getElementById("info").appendChild(profile_info).innerHTML = "Нет данных";
	}

}