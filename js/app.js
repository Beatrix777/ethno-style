gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {

    ScrollSmoother.create ({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.etno-section', {opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.etno-section',
            start: 'center',
            end: '850',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

    itemsL.forEach(item => {
        gsap.fromTo(item, { x: 50, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                 trigger: item,
                 start: '-1000',
                 end: '-100',
                 scrub: true 
            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

    itemsR.forEach(item => {
        gsap.fromTo(item, { x: -50, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                 trigger: item,
                 start: '-1000',
                 end: '-100',
                 scrub: true 
            }
        })
    })
    
}
document.querySelectorAll('.slider').forEach((n, i) => {
    window[`slider${i+1}`] = new Swiper(n, {
      freeMode: true,
      centeredSlides: true,
      direction: 'vertical',
      mousewheel: true,
      slidesPerView: 1.75,
      slidesOffsetBefore: -125
    })
  })
  bindSwipers(slider1, slider2, slider3)