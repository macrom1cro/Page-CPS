document.querySelectorAll(".about__read-more").forEach(btn => {
  btn.addEventListener("click", e => {
    const textBlock = e.target.previousElementSibling;
    textBlock.classList.toggle("active");
    // btn.textContent = textBlock.classList.contains("active")
    //   ? "Свернуть ▲"
    //   : "Читать далее ▼";
  });
});
