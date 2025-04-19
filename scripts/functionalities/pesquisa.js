const initSearchFunctionality = () => {

   const lupaBtn = document.querySelector('.logo-search-area__search-bar button')
   const searchBar = document.querySelector('.logo-search-area__search-bar input')
   const avantiLogo = document.querySelector('.logo-search-area__logo')
   
   const lupaBtnMobile = document.querySelector('.search-area__mobile-search button')
   const searchBarMobile = document.querySelector('.search-area__mobile-search input')

   function pesquisa() {
   
      const mainPadrao = document.querySelector('.main-padrao')
      const mainPesquisa = document.querySelector('.main-pesquisa')
      const textoPesquisa = mainPesquisa.querySelector('.main-pesquisa p')
   
      if(!mainPadrao.classList.contains('main-padrao--escondido')) {
         mainPadrao.classList.add('main-padrao--escondido')
         mainPesquisa.classList.add('main-pesquisa--ativo')
      }

      if(window.innerWidth >= 768) {
         textoPesquisa.innerText = `Você buscou por: '${searchBar.value}'`
         searchBar.value = ''

         return
      }

      textoPesquisa.innerText = `Você buscou por: '${searchBarMobile.value}'`
      searchBarMobile.value = ''
   }

   function voltar() {

      const mainPadrao = document.querySelector('.main-padrao')
      const mainPesquisa = document.querySelector('.main-pesquisa')
   
      if(mainPadrao.classList.contains('main-padrao--escondido')) {
         mainPadrao.classList.remove('main-padrao--escondido')
         mainPesquisa.classList.remove('main-pesquisa--ativo')
      }

      searchBar.value = ''
   }

   lupaBtn.addEventListener('click', pesquisa)
   lupaBtnMobile.addEventListener('click', pesquisa)

   searchBar.addEventListener('keydown', (event) => {
      if(event.key === 'Enter') {
         pesquisa()
      }
   })

   searchBarMobile.addEventListener('keydown', (event) => {
      if(event.key === 'Enter') {
         pesquisa()
      }
   })

   avantiLogo.addEventListener('click', voltar)
}

export { initSearchFunctionality }