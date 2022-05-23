import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  initMenu();
  initBuscaForm();
}

function initMenu() {
  const menu = document.querySelector('[data-menu="menu"]');
  const menuBtn = document.querySelector('[data-menu="btn"]');
  const menuIcone = menuBtn.querySelector(".menu__icone");
  const classe = "ativo";

  if (menu && menuBtn) {
    function ativaMenu(event) {
      event.preventDefault();
      const itensMenu = [menu, menuBtn, menuIcone];
      if (this.classList.contains(classe)) {
        itensMenu.forEach((item) => {
          item.classList.remove(classe);
        });

        return;
      }

      itensMenu.forEach((item) => {
        item.classList.add(classe);
      });

      outsideClick(menu, ["click"], () => {
        itensMenu.forEach((item) => {
          item.classList.remove(classe);
        });
      });
    }

    menuBtn.addEventListener("click", ativaMenu);
  }
}

function initBuscaForm() {
  const btnBusca = document.querySelector(".links__busca");
  const barraBusca = document.querySelector(".header__busca");
  const classe = "ativo";

  if (!btnBusca && !barraBusca) return;

  function animaBarraBusca(event) {
    event.preventDefault();

    if (barraBusca.classList.contains(classe)) {
      barraBusca.classList.remove(classe);
      return;
    }

    barraBusca.classList.add(classe);

    outsideClick(barraBusca, ["click"], () => {
      barraBusca.classList.remove(classe);
    });
  }

  btnBusca.addEventListener("click", animaBarraBusca);
}
