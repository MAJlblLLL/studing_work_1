document.addEventListener("DOMContentLoaded", function () {
	// получим кнопку id="btn" с помощью которой будем открывать модальное окно
	const btn = document.querySelector("#btn")
	// активируем контент id="modal" как модальное окно
	const modal = new bootstrap.Modal(document.querySelector("#modal"))
	// при нажатии на кнопку
	btn.addEventListener("click", function () {
		// открываем модальное окно
		modal.show()
	})
})

document.addEventListener("DOMContentLoaded", function () {
	const scale01 = document.getElementById("scale-01")
	const scale02 = document.getElementById("scale-02")
	const scale1 = document.getElementById("scale-1")
	const scale0 = document.getElementById("scale-0")

	// Убедимся, что элементы существуют
	if (scale0) {
		scale0.style.fontWeight = "500"
		scale0.addEventListener("click", function () {
			if (scale01 && scale02 && scale1) {
				scale01.style.backgroundColor = "#7E7AB8"
				scale02.style.backgroundColor = "#acacac"
				scale0.style.fontWeight = "500"
				scale1.style.fontWeight = "300"
			}
		})
	}

	if (scale1) {
		scale1.addEventListener("click", function () {
			if (scale01 && scale02) {
				scale02.style.backgroundColor = "#7E7AB8"
				scale01.style.backgroundColor = "#acacac"
				scale1.style.fontWeight = "500"
				if (scale0) {
					scale0.style.fontWeight = "300"
				}
			}
		})
	}
})

/* 								NAV									*/

document.getElementById("nav-tort").addEventListener("mouseover", () => {
	document.getElementById("nav-under-tort").classList.add("underline__nav")
	document.getElementById("nav-under-tort").style.transition = "0.7s"
	document.getElementById("nav-under-tort").style.width = "55px"
	document.getElementById("nav-under-tort").style.transform = "translateY(5px)"
	document.getElementById("nav-under-tort").style.opacity = "0.5"
})

document.addEventListener("DOMContentLoaded", function () {
	const infoLink = document.getElementById("nav-info")

	// Добавляем класс подчеркивания для information.html
	if (window.location.pathname.includes("torts.html")) {
		document.getElementById("nav-under-tort_tort").classList.add("underline__nav")
		document.getElementById("nav-under-tort_tort").style.transition = "0.7s"
		document.getElementById("nav-under-tort_tort").style.width = "55px"
		document.getElementById("nav-under-tort_tort").style.transform = "translateY(5px)"
		document.getElementById("nav-under-tort_tort").style.opacity = "0.5"
		document.getElementById("nav-tort").style.opacity = "0.5"
	}
})

document.getElementById("nav-tort").addEventListener("mouseout", () => {
	document.getElementById("nav-under-tort").classList.remove("underline__nav")
	document.getElementById("nav-under-tort").style.transform = "translateY(-5px)"
})

document.getElementById("nav-pir").addEventListener("mouseover", () => {
	document.getElementById("nav-under-pir").classList.add("underline__nav")
	document.getElementById("nav-under-pir").style.transition = "0.7s"
	document.getElementById("nav-under-pir").style.width = "95px"
	document.getElementById("nav-under-pir").style.transform = "translateY(5px)"
	document.getElementById("nav-under-pir").style.opacity = "0.5"
})

document.addEventListener("DOMContentLoaded", function () {
	const infoLink = document.getElementById("nav-info")

	// Добавляем класс подчеркивания для information.html
	if (window.location.pathname.includes("cakes.html")) {
		document.getElementById("nav-under-pir_pir").classList.add("underline__nav")
		document.getElementById("nav-under-pir_pir").style.transition = "0.7s"
		document.getElementById("nav-under-pir_pir").style.width = "95px"
		document.getElementById("nav-under-pir_pir").style.transform = "translateY(5px)"
		document.getElementById("nav-under-pir_pir").style.opacity = "0.5"
		document.getElementById("nav-pir").style.opacity = "0.5"
	}
})

document.getElementById("nav-pir").addEventListener("mouseout", () => {
	document.getElementById("nav-under-pir").classList.remove("underline__nav")
	document.getElementById("nav-under-pir").style.transform = "translateY(-5px)"
})

document.getElementById("nav-info").addEventListener("mouseover", () => {
	document.getElementById("nav-under-info").classList.add("underline__nav")
	document.getElementById("nav-under-info").style.transition = "0.7s"
	document.getElementById("nav-under-info").style.width = "116px"
	document.getElementById("nav-under-info").style.transform = "translateY(5px)"
	document.getElementById("nav-under-info").style.opacity = "0.5"
})

document.addEventListener("DOMContentLoaded", function () {
	const infoLink = document.getElementById("nav-info_info")

	// Добавляем класс подчеркивания для information.html
	if (window.location.pathname.includes("information.html")) {
		document.getElementById("nav-under-info_info").classList.add("underline__nav")
		document.getElementById("nav-under-info_info").style.transition = "0.7s"
		document.getElementById("nav-under-info_info").style.width = "116px"
		document.getElementById("nav-under-info_info").style.transform = "translateY(5px)"
		document.getElementById("nav-under-info_info").style.opacity = "0.5"
		document.getElementById("nav-info").style.opacity = "0.5"
	}
})

document.getElementById("nav-info").addEventListener("mouseout", () => {
	document.getElementById("nav-under-info").classList.remove("underline__nav")
	document.getElementById("nav-under-info").style.transform = "translateY(-5px)"
})

document.getElementById("nav-delivery").addEventListener("mouseover", () => {
	document.getElementById("nav-under-delivery").classList.add("underline__nav")
	document.getElementById("nav-under-delivery").style.transition = "0.7s"
	document.getElementById("nav-under-delivery").style.width = "88px"
	document.getElementById("nav-under-delivery").style.transform = "translateY(5px)"
	document.getElementById("nav-under-delivery").style.opacity = "0.5"
})

document.addEventListener("DOMContentLoaded", function () {
	const infoLink = document.getElementById("nav-delivery")

	// Добавляем класс подчеркивания для information.html
	if (window.location.pathname.includes("delivery.html")) {
		document.getElementById("nav-under-delivery_del").classList.add("underline__nav")
		document.getElementById("nav-under-delivery_del").style.transition = "0.7s"
		document.getElementById("nav-under-delivery_del").style.width = "88px"
		document.getElementById("nav-under-delivery_del").style.transform = "translateY(5px)"
		document.getElementById("nav-under-delivery_del").style.opacity = "0.5"
		document.getElementById("nav-delivery").style.opacity = "0.5"
	}
})

document.getElementById("nav-delivery").addEventListener("mouseout", () => {
	document.getElementById("nav-under-delivery").classList.remove("underline__nav")
	document.getElementById("nav-under-delivery").style.transform = "translateY(-5px)"
})

function showCakes() {
	const pastries = document.querySelectorAll(".pastry")
	pastries.forEach((pastry) => {
		pastry.classList.remove("active")
		pastry.classList.add("test")
	})

	const cakes = document.querySelectorAll(".cake")
	cakes.forEach((cake) => {
		cake.classList.add("active")
		cake.classList.remove("test")
	})
}

function showPastries() {
	// Скрываем все торты
	const cakes = document.querySelectorAll(".cake")
	cakes.forEach((cake) => {
		cake.classList.remove("active") // Убираем класс 'active' для тортов
		cake.classList.add("test")
	})

	// Показываем все пирожные
	const pastries = document.querySelectorAll(".pastry")
	pastries.forEach((pastry) => {
		pastry.classList.add("active") // Добавляем класс 'active' для пирожных
		pastry.classList.remove("test")
	})
}

// Инициализация по умолчанию
showCakes() // По умолчанию показываем торты
