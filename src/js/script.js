// *** LIGHTBOX ***

const LIGHTBOX = document.querySelector("#lightbox");

const LIGHTBOX_IMG = document.querySelector("#lightbox img");

LIGHTBOX_IMG?.addEventListener("click", () => LIGHTBOX.close());
document.body.addEventListener("click", (evt) => {
  if (!evt.target.matches("[data-full-img]")) return;
  LIGHTBOX_IMG.src = evt.target.dataset.fullImg;
  LIGHTBOX.showModal();
});