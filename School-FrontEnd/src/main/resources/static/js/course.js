function onLoad() {
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

	onSearchClick();
}

function onSearchClick() {

	var arrayReturn = [];
	$.ajax({
		url : "http://localhost:8080/students/all/"
				+ document.getElementById("courseId").value,
		type : 'GET',
		async : false,
		dataType : 'json',
		success : function(data) {
			for (var i = 0, len = data.length; i < len; i++) {
				arrayReturn.push([
						'<a href="http://localhost:8082/student?id='
								+ data[i].id + '">' + data[i].id + '</a>',
						'<a href="http://localhost:8082/student?id='
								+ data[i].id + '">' + data[i].name + '</a>',
						data[i].birthDate ]);
			}
			$('#studentTable').DataTable({
				"aaData" : arrayReturn,
				destroy : true

			});
		},
		error : function(result, status) {
			console.log(result);
		}
	});
}
