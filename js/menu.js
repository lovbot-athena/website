/* Minimal dropdown menu toggle — the only JavaScript on the site.
   Opens/closes the top-corner navigation menu and closes it when you
   click elsewhere or press Escape. */
(function () {
  var button = document.querySelector(".menu__button");
  var list = document.querySelector(".menu__list");
  if (!button || !list) return;

  function close() {
    list.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  }

  button.addEventListener("click", function (e) {
    e.stopPropagation();
    var isOpen = list.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", function (e) {
    if (!list.contains(e.target) && !button.contains(e.target)) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
})();
