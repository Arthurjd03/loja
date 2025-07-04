        /* function mudouTamanho() {
            if (window.innerWidth >= 768) {
                items.style.display = 'block'
            } else {
                items.style.display = 'none'
            }
        }
            
        function clickmenu () {
            if (items.style.display == 'block') {
                items.style.display = 'none'
            } else {
                items.style.display = 'block'
            }
        }
*/
document.addEventListener("DOMContentLoaded", function () {
  const botaoAbrir = document.getElementById("abrir-menu");  // seu botão hambúrguer
  const botaoFechar = document.getElementById("fechar-menu"); // botão X
  const menuLinks = document.querySelector(".links");

  function ativarMenuMobile() {
    // apenas se for tela menor que 768px
    if (window.innerWidth < 768) {
      botaoAbrir.style.display = 'block'; // mostra o botão
      botaoAbrir.addEventListener("click", abrirMenu);
      botaoFechar.addEventListener("click", fecharMenu);
    } else {
      // Em telas grandes, mostra o menu fixo e remove a classe .ativo
      menuLinks.classList.remove("ativo");
      botaoAbrir.style.display = 'none'; // esconde o botão hamburguer
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

  // chama a função ao carregar
  ativarMenuMobile();

  // escuta redimensionamento de tela
  window.addEventListener("resize", ativarMenuMobile);
});


