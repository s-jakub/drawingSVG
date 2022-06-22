const path = document.querySelector("path");
const pathLength = path.getTotalLength();

const sectionOneBg = document.querySelector(".one");

path.style.strokeDasharray = 1;
path.style.strokeDashoffset = 1;

window.addEventListener("scroll", () => {
  sectionOneBg.style.backgroundSize =
    108 + document.documentElement.scrollTop / 10 + "%";

  let scrollPercent =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  if (scrollPercent.toFixed(2) < 0.2)
    path.style.strokeDashoffset = 1 - scrollPercent;
  else path.style.strokeDashoffset = 1 - scrollPercent - 0.1;

  const parallaxTarget = document.querySelectorAll(".scroll");
  parallaxTarget.forEach((elem) => {
    let pos = window.scrollY * elem.dataset.rate;

    if (elem.dataset.direction === "vertical") {
      return (elem.style.transform = `translateY(${pos}px)`);
    }
  });
});
