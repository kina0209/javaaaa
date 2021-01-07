var appMenu = document.querySelectorAll(".jsblock-item");


function allclassremove(clickedElement) {
	appMenu.forEach(item => {
		if (item.dataset.itemOrder != clickedElement.dataset.itemOrder) {
			item.classList.remove('active');
			console.log('fuckkkkkkkkkkkkk')

		}
	})
}

appMenu.forEach((item, index) => {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		allclassremove(item);
		if (index == item.dataset.itemOrder) {
			item.classList.toggle('active');
			console.log('fuck')
		}
	})
});

