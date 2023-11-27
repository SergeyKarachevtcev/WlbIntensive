const cardModal = function () {
	const cardBtn = document.querySelector(".button-cart");
	const cardModal = document.getElementById("modal-cart");
	const modalClose = cardModal.querySelector(".modal-close");

	/* по клику открываем модальное окно корзины */
	cardBtn.addEventListener("click", function () {
		cardModal.style.display = "flex";
	});

	/* по клику закрывам модальное окно корзины */
	modalClose.addEventListener("click", function () {
		cardModal.style.display = "";
	});
};

cardModal()