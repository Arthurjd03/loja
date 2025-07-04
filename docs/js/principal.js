
document.addEventListener("DOMContentLoaded", function () {
  const botaoAbrir = document.getElementById("abrir-menu"); 
  const botaoFechar = document.getElementById("fechar-menu"); 
  const menuLinks = document.querySelector(".links");

  function ativarMenuMobile() {
    if (window.innerWidth < 768) {
      botaoAbrir.style.display = 'block'; 
      botaoAbrir.addEventListener("click", abrirMenu);
      botaoFechar.addEventListener("click", fecharMenu);
    } else {
      menuLinks.classList.remove("ativo");
      botaoAbrir.style.display = 'none';
    }
  }

  function abrirMenu() {
    menuLinks.classList.add("ativo");
    botaoAbrir.style.display = 'none';
  }

  function fecharMenu() {
    menuLinks.classList.remove("ativo");
    botaoAbrir.style.display = 'block';
  }
  ativarMenuMobile();
  window.addEventListener("resize", ativarMenuMobile);
});




