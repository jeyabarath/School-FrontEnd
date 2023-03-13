function onLoad() {
	let params = new URLSearchParams(location.search);
	console.log(params.get('id'));

	$.ajax({
		url : "http://localhost:8080/students/student/" + params.get('id'),
		type : 'GET',
		async : false,
		dataType : 'json',
		success : function(data) {

			document.getElementById("id").value = data.id;
			document.getElementById("name").value = data.name;
			document.getElementById("birthDate").value = data.birthDate;
		},
		error : function(result, status) {
			console.log(result);
		}
	});

}

function onUpdateClick() {
	if (confirm("Are you sure want to proceed?")) {
		$.ajax({
			type : "PUT",
			url : "http://localhost:8080/students/update/"
					+ document.getElementById("id").value,
			data : JSON.stringify({
				"id" : document.getElementById("id").value,
				"name" : document.getElementById("name").value,
				"birthDate" : document.getElementById("birthDate").value
			}),
			contentType : "application/json",
			success : function(result) {
				console.log(result);
				window.location.href = "http://localhost:8082/";
			},
			error : function(result, status) {
				console.log(result);
			}
		});
	} else {
		return;
	}

}

function onDeleteClick() {

	if (confirm("Are you sure want to proceed?")) {
		$.ajax({
			type : "DELETE",
			url : "http://localhost:8080/students/delete/"
					+ document.getElementById("id").value,
			contentType : "application/json",
			success : function(result) {
				console.log(result);
				window.location.href = "http://localhost:8082/";
			},
			error : function(result, status) {
				console.log(result);
			}
		});
	} else {
		return;
	}
}
