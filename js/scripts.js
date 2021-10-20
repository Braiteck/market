$(() => {
	// Кейсы
	if ($('.cases .swiper-container').length) {
		new Swiper('.cases .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Моб. меню
	$('header .mob_menu_btn, .overlay').click((e) => {
		e.preventDefault()

		!$('header .mob_menu_btn').hasClass('active')
			? $('header .menu, .overlay').fadeIn(300)
			: $('header .menu, .overlay').fadeOut(200)

		$('header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
	})


	// Parallax
	const rellax = new Rellax('.rellax', {
		center: false,
		wrapper: null,
		round: true,
		vertical: true,
		horizontal: false
	})
})