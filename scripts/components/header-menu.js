const initHeaderMenu = () => {

   const menu = document.querySelector('.segunda-linha__menu-categorias')
   const todasCategoriasBtn = document.querySelector('.search-area__todas-categorias')

   const departamentoButtons = document.querySelectorAll('.search-area__departamento')

   todasCategoriasBtn.addEventListener('click', () => {

      const classeMenuEscondido = document.querySelector('.segunda-linha__menu-categorias--lista-escondido')
      
      if(classeMenuEscondido) {
         menu.classList.remove('segunda-linha__menu-categorias--lista-escondido')
         return
      }

      menu.classList.toggle('segunda-linha__menu-categorias--escondido')
   })

   departamentoButtons.forEach(btn => btn.addEventListener('click', () => {

      const classeListaEscondida = document.querySelector('.segunda-linha__menu-categorias--lista-escondido')
      const classeMenuEscondido = document.querySelector('.segunda-linha__menu-categorias--escondido')
      
      if(!classeListaEscondida && !classeMenuEscondido) {
         menu.classList.add('segunda-linha__menu-categorias--lista-escondido')
         return
      }

      menu.classList.toggle('segunda-linha__menu-categorias--lista-escondido')
      menu.classList.toggle('segunda-linha__menu-categorias--escondido')
   }))
}

export { initHeaderMenu }