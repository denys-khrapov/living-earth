gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const tl = gsap.timeline();


// ScrollSmoother.create({
// 	wrapper: '.wrapper',
// 	content: '.content',
// 	smooth: 2.5,
// 	effects: true,
// });


tl.fromTo('.hero__subtitle', {
	x: -100,
	opacity: 0
}, {
	x: 0,
	opacity: 1,
	duration: 1.5
}, 1
).fromTo('.hero__title', {
	y: 50,
	opacity: 0,
}, {
	y: 0,
	opacity: 1,
	duration: 1.5
}, 0.4
).fromTo('.hero__text', {
	y: 50,
	opacity: 0
}, {
	y: 0,
	opacity: 1,
	duration: 1
}, 0.6).fromTo('.hero__btn-1', {
	y: 50,
	opacity: 0,

}, {
	y: 0,
	opacity: 1,
	duration: 1
}, 1.5).fromTo('.hero__btn-2', {
	y: 50,
	opacity: 0,

}, {
	y: 0,
	opacity: 1,
	duration: 1
}, 2).fromTo('.logo', {
	y: -50,
	opacity: 0,

}, {
	y: 0,
	opacity: 1,
	duration: 1
}, 3).fromTo('.menu li', {
	y: -50,
	opacity: 0,

}, {
	y: 0,
	opacity: 1,
	duration: 1,
	stagger: 0.25
}, 3.5)
	.fromTo('.star', {
		scale: 0,
		opacity: 0,

	}, {
		scale: 1,
		opacity: 1,
		duration: 1,
		stagger: 0.25
	}, 3.5)
// .fromTo('.hero__img', {
// 	scale: 0.7,
// 	opacity: 0.5,
// 	y: 50

// }, {
// 	scale: 1,
// 	opacity: 1,
// 	duration: 1.2,
// 	y: 0,
// }, 2)



// Hero scroll animations


gsap.to('.hero', {
	scrollTrigger: {
		trigger: '.header',
		// markers: true,
		start: 'top top',
		scrub: true,
	},
	yPercent: 80,
	scale: 0.5,
	xPercent: -80,
	opacity: 0.5
})

gsap.to('.hero__bg', {
	scrollTrigger: {
		trigger: '.header',
		start: 'top top',
		scrub: true,
	},
	scale: 1.2,
})

gsap.to('.hero__img', {
	scrollTrigger: {
		trigger: '.header',
		start: 'top top',
		scrub: true,
	},
	scale: 1.5,
})

//Stars animations

gsap.to('[data-speed]', {
	y: (i, el) => - (1 - parseFloat(el.getAttribute('data-speed'))) * ScrollTrigger.maxScroll(window),
	scrollTrigger: {
		scrub: 0
	}
})


// Regions animations

gsap.from('.regions__img', {
	scrollTrigger: {
		trigger: '.section__regions',
		start: '-30% center',
		// markers: true,
		end: '+=300px',
		scrub: true
	},
	scale: 0,
	transformOrigin: 'left center',
	ease: 'none',
	duration: 1,
})

gsap.from('.regions__title', {
	scrollTrigger: {
		trigger: '.section__regions',
		start: '-30% center',
		// markers: true,
		end: '+=300px',
		scrub: true
	},
	scale: 0,
	transformOrigin: 'top center',
	duration: 1,
	ease: 'none',
})


// info animations


gsap.to('.left__item', {
	scrollTrigger: {
		trigger: '.section__info',
		scrub: true,
	},
	yPercent: -40,
})
gsap.to('.right__item', {
	scrollTrigger: {
		trigger: '.section__info',
		scrub: true,
	},
	yPercent: 30,
})


// featured animations

gsap.from('.featured__title', {
	scrollTrigger: {
		trigger: '.section__featured',
		start: '-30% bottom',
		scrub: true,
		end: '+=350'
	},
	scale: 0,
	transformOrigin: 'left center'
})


const items = gsap.utils.toArray('.featured__item');

gsap.to(items, {
	scrollTrigger: {
		trigger: '.section__featured',
		start: '-30% center',
		scrub: true,
	},
	xPercent: -100 * (items.length - 1),
})