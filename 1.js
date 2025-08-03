function init() {

  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

init();

var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
main.addEventListener("mousemove", (dets) => {
  cursor.style.top = dets.y + 20 + "px";
  cursor.style.left = dets.x + 20 +"px";
})

var video = document.querySelector(".page1 video");
video.addEventListener("mouseover", () => {
  cursor.classList.add("button-shape");
  cursor.innerHTML = "sound on";
})
video.addEventListener("mouseleave", () => {
  cursor.style.backgroundColor = "white";
  cursor.classList.remove("button-shape");
  cursor.innerHTML = "";

})
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 .h1",
    scroller: ".main",
    start: "top 25%",
    end: "top 0%",
    markers: true,
    scrub: 2
  }
})
tl.to(".page1 .h1", {
  x: -120,
  y: -5,
  duration: 1,
  delay: 0.8,
}, "a")
tl.to(".page1 .h4", {
  x: 100,
  duration: 1,
  delay: 0.8,
}, "a")
tl.to(".page1 video", {
  width: "90%",
  duration: 1,
  delay: 0.8,
  scrub: 1
})


var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 .h1",
    scroller: ".main",
    start: "top -125%",
    end: "top -130%",
    markers: true,
    scrub: 2
  }
})
t2.to(".main", {
  backgroundColor: "white"
})
var t21 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    scroller: ".main",
    start: "top -250%",
    end: "top -300%",
    markers: true,
    scrub: 2
  }
})
t21.to(".main", {
  backgroundColor: "black"
})
var boxes = document.querySelectorAll(".box");
// console.log(boxes);
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    cursor.style.width = "300px";
    cursor.style.height = "250px";
    cursor.style.borderRadius = "0";
    cursor.style.backgroundImage = `url(${att})`

  })
  elem.addEventListener("mouseleave", function () {
     cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = `none`  })
})