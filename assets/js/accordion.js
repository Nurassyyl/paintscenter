document.querySelector('.steps-accordion-desc').style.maxHeight = document.querySelector('.steps-accordion-desc').scrollHeight + "px";
document.querySelector('.steps-accordion-desc').style.margin = 20 + "px";
document.querySelector('.steps-accordion-head__img').style.transform = "rotate(" + 180 + "deg)";

document.querySelectorAll(".steps-accordion-head").forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    let arrow = el.children[1];

    if (content.style.maxHeight) {
      document.querySelectorAll('.steps-accordion-desc').forEach((el) => {
        el.style.maxHeight = null;
        el.style.margin = 0 + "px";
      });
      arrow.style.transform = "rotate(" + 0 + "deg)";
    } else {
      document.querySelectorAll('.steps-accordion-desc').forEach((el) => {
        el.style.maxHeight = null;
        el.style.margin = 0 + "px";
      });
      document.querySelectorAll(".steps-accordion-head__img").forEach((el) => {
        el.style.transform = "rotate(" + 0 + "deg)";
      })
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.margin = 20 + "px";
      arrow.style.transform = "rotate(" + 180 + "deg)";
    }
  })
})

document.querySelector('.questions-accordion-desc').style.maxHeight = document.querySelector('.questions-accordion-desc').scrollHeight + "px";

document.querySelectorAll(".questions-accordion-head").forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    let arrow = el.children[1];

    if (content.style.maxHeight) {
      document.querySelectorAll('.questions-accordion-desc').forEach((el) => {
        el.style.maxHeight = null;
      });
      arrow.style.transform = "rotate(" + 0 + "deg)";
      el.classList.remove('active');
    } else {
      document.querySelectorAll(".questions-accordion-head").forEach((el) => {
        el.classList.remove('active');
      })
      document.querySelectorAll('.questions-accordion-desc').forEach((el) => {
        el.style.maxHeight = null;
      });
      document.querySelectorAll(".questions-accordion-head__img").forEach((el) => {
        el.style.transform = "rotate(" + 0 + "deg)";
      })
      content.style.maxHeight = content.scrollHeight + "px";
      arrow.style.transform = "rotate(" + 180 + "deg)";
      el.classList.add('active');
    }
  })
})

document.querySelector('.footer-mobile-accordion-content').style.maxHeight = document.querySelector('.footer-mobile-accordion-content').scrollHeight + "px";
document.querySelectorAll(".footer-mobile-accordion-head").forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    // let arrow = el.children[1];

    if (content.style.maxHeight) {
      document.querySelectorAll('.footer-mobile-accordion-content').forEach((el) => {
        el.style.maxHeight = null;
      });
      // arrow.style.transform = "rotate(" + 0 + "deg)";
      el.classList.remove('active');
    } else {
      document.querySelectorAll(".footer-mobile-accordion-head").forEach((el) => {
        el.classList.remove('active');
      })
      document.querySelectorAll('.footer-mobile-accordion-content').forEach((el) => {
        el.style.maxHeight = null;
      });
      // document.querySelectorAll(".footer-mobile-accordion-head__img").forEach((el) => {
      //   el.style.transform = "rotate(" + 0 + "deg)";
      // })
      content.style.maxHeight = content.scrollHeight + "px";
      // arrow.style.transform = "rotate(" + 180 + "deg)";
      el.classList.add('active');
    }
  })
})