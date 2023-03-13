$(document).ready(
		function() {

			var arrayReturn = [];
			$.ajax({
				url : "http://localhost:8080/students/all",
				type : 'GET',
				async : false,
				dataType : 'json',
				success : function(data) {
					for (var i = 0, len = data.length; i < len; i++) {
						arrayReturn.push([
								'<a href="http://localhost:8082/student?id='
										+ data[i].id + '">' + data[i].id
										+ '</a>',
								'<a href="http://localhost:8082/student?id='
										+ data[i].id + '">' + data[i].name
										+ '</a>', data[i].birthDate ]);
					}
					$('#studentTable').DataTable({
						"aaData" : arrayReturn
					});
				},
				error : function(result, status) {
					console.log(result);
				}
			});

		});
