const search = function () {
	const input = document.querySelector(".search-block > input");
	const searchBtn = document.querySelector(".search-block > button");

	/* input.addEventListener("input", function (event) {
		console.log(event.target.value);
	}); */
	searchBtn.addEventListener("click", function () {
		console.log(input.value);
	});
};

search();
