function onHomeClick() {
	window.location.href = "http://localhost:8082/";
}

function onBackClick() {

	if (confirm("Are you sure you want to navigate away from this page?")) {
		history.go(-1);
	}
}