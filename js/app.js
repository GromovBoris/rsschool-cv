document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    section.addEventListener("mouseover", function () {
      const container = document.querySelector(".container");
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      section.style.width = `${containerWidth}px`;
      section.style.height = `${containerHeight}px`;
    });

    section.addEventListener("mouseout", function () {
      section.style.width = "";
      section.style.height = "";
    });
  });
});
