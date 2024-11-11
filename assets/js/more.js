const btnMore = document.querySelector(".btn-more");
btnMore.addEventListener('click', () => {
  document.querySelector(".more-text").classList.add("active");
  btnMore.classList.add("hidden");
})