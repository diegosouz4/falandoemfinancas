import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  initMenu();
  initBuscaForm();
  initSubMenus();
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

function initSubMenus() {
  const subMenus = document.querySelectorAll(".menu-item-has-children");
  const larguraTela = window.innerWidth;

  console.log(larguraTela);
  if (!subMenus || larguraTela > 1250) return;

  subMenus.forEach((item) => {
    const link = item.querySelector("a");
    const btnOpenMenu = document.createElement("span");
    link.classList.add("menu__link__submenu");
    btnOpenMenu.classList.add("menu__btn__submenu");
    btnOpenMenu.ariaLabel = "abrir submenu";
    link.appendChild(btnOpenMenu);
  });

  const subMenuBtns = document.querySelectorAll(".menu__btn__submenu");

  subMenuBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const alvo = event.target;
      const pai = alvo.parentNode.parentNode;
      const submenu = pai.querySelector(".sub-menu");
      alvo.classList.toggle("ativo");
      submenu.classList.toggle("ativo");
    });
  });
}
