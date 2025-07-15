var tl = gsap.timeline()

tl.from("img",{
    y:-30,
    opacity: 0,
    duration: 1,

})
tl.from("a, h2, h4, p, button",{
    y:-20,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
})