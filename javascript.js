// for smooth scrolling 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// for animation 

var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0,
})

tl.to("#page1",{
    y:"30vh",
    duration: 1,
    delay : 1,
})

tl.to("#page1",{
    y:"0vh",
    rotate:-360,
    scale:1,
    duration:0.8,
})




// for sidebar 

let sidebarcontainer = document.getElementById("sidebar-container");
let sidebaropen = document.getElementById("hide");
let sidebarclose = document.getElementById("close");

sidebaropen.addEventListener("click",()=>{
    sidebarcontainer.classList.toggle("sidebare-show");
})

sidebarclose.addEventListener("click",()=>{
    sidebarcontainer.classList.toggle("sidebare-show");
})

