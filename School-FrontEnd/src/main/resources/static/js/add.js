function onFormSubmit() {

	if (document.getElementById("name").value == "") {
		alert("Please fill in Name");
		return;
	}
	if (document.getElementById("birthDate").value == "") {
		alert("Please fill in Date of Birth");
		return;
	}

	if (confirm("Are you sure want to proceed?")) {
		$.ajax({
			type : "POST",
			url : "http://localhost:8080/students/add",
			data : JSON.stringify({
				"name" : document.getElementById("name").value,
				"birthDate" : document.getElementById("birthDate").value
			}),
			contentType : "application/json",
			success : function(result) {
				console.log(result);
				window.location.href = "http://localhost:8082/student?id="
						+ result.id;
			},
			error : function(result, status) {
				console.log(result);
			}
		});
	} else {
		return;
	}
}
