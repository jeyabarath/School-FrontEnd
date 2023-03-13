function onLoad() {

	var arrayReturn = [];
	$.ajax({
		url : "http://localhost:8080/students/all",
		type : 'GET',
		async : false,
		dataType : 'json',
		success : function(data) {
			for (var i = 0, len = data.length; i < len; i++) {
				arrayReturn.push([ data[i].id, data[i].name ]);
			}
			var select = document.getElementById("studentId");
			var options = arrayReturn;

			for (var i = 0; i < options.length; i++) {
				var opt = options[i];
				var el = document.createElement("option");
				el.textContent = opt[0] + " - " + opt[1];
				el.value = opt[0];
				select.appendChild(el);
			}
		},
		error : function(result, status) {
			console.log(result);
		}
	});

	var arrayReturn2 = [];
	$.ajax({
		url : "http://localhost:8080/students/all/course",
		type : 'GET',
		async : false,
		dataType : 'json',
		success : function(data) {
			for (var i = 0, len = data.length; i < len; i++) {
				arrayReturn2.push([ data[i].id, data[i].courseName ]);
			}
			var select2 = document.getElementById("courseId");
			var options2 = arrayReturn2;

			for (var i = 0; i < options2.length; i++) {
				var opt = options2[i];
				var el = document.createElement("option");
				el.textContent = opt[0] + " - " + opt[1];
				el.value = opt[0];
				select2.appendChild(el);
			}
		},
		error : function(result, status) {
			console.log(result);
		}
	});
}

function onRegisterClick() {
	if (confirm("Are you sure want to proceed?")) {
		$.ajax({
			type : "POST",
			url : "http://localhost:8080/students/add/student/course",
			data : JSON.stringify({
				"studentId" : document.getElementById("studentId").value,
				"courseId" : document.getElementById("courseId").value
			}),
			contentType : "application/json",
			success : function(result) {
				console.log(result);
				window.location.href = "http://localhost:8082/course";
			},
			error : function(result, status) {
				console.log(result);
			}
		});
	} else {
		return;
	}
}
